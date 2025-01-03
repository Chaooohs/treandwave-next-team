'use server';
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTags(params) {
    
    let res = await fetch (`${API_BASE_URL}/tag`)
    let tags = await res.json();
    return tags;
}


export async function addTag(prevState, formData) {
    const token = cookies().get('adminToken');
    const tagName = formData.get('tag');

    try {
        const res = await fetch(`${API_BASE_URL}/tag`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({names:[tagName]})
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання тега:', errorData.message || 'помилка');
            return { message: 'Помилка додавання тега' }
        }
        revalidatePath('/admin/dashboard/tags');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
    
}


export async function deleteTag(prevState, formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`${API_BASE_URL}/tag`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ ids : [id] })
            
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення тега:', errorData.message || 'помилка');
            return {message: 'Помилка видалення тега'}
        }
        revalidatePath('/admin/dashboard/tags');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}



 
