'use server';
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export async function getColors(params) {
    
    let res = await fetch (`${API_BASE_URL}/color`, { cache: 'no-store' })
    let colors = await res.json();
    return colors;
}

export async function addColor(prevState, formData) {
    const token = cookies().get('adminToken');
    const colorName = formData.get('color');

    try {
        const res = await fetch(`${API_BASE_URL}/color`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({name:colorName})
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання кольору:', errorData.message || 'помилка');
            return { message: 'Помилка додавання кольору' }
        }
        revalidatePath('/admin/dashboard/colors');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
    
}