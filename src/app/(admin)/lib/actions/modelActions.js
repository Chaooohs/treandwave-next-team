'use server';
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getModels(params) {
    
    let res = await fetch (`${API_BASE_URL}/model`, { cache: 'no-store' })
    let models = await res.json();
    return models;
}


export async function addModel(prevState, formData) {
    const token = cookies().get('adminToken');
    const modelName = formData.get('model');

    try {
        const res = await fetch(`${API_BASE_URL}/model`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ name:modelName })
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання моделі:', errorData.message || 'помилка');
            return { message: 'Помилка додавання моделі' }
        }
        revalidatePath('/admin/dashboard/model');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}


export async function deleteModel(prevState, formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`${API_BASE_URL}/model/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення моделі:', errorData.message || 'помилка');
            return {message: 'Помилка видалення моделі'}
        }
        revalidatePath('/admin/dashboard/model');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}



 
