'use server';
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';

const API_BASE_URL = 'https://clothing-store-api-lh6l.onrender.com/api/v1/collection';

export async function getCollection(params) {
    
    let res = await fetch (`${API_BASE_URL}`)
    let collection = await res.json();
    return collection;
}


export async function addCollection(prevState, formData) {
    const token = cookies().get('adminToken');
    const collectionName = formData.get('collection');

    try {
        const res = await fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ name:collectionName })
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання колекції:', errorData.message || 'помилка');
            return { message: 'Помилка додавання колекції' }
        }
        revalidatePath('/admin/dashboard/collection');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}


export async function deleteCollection(prevState, formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');
    console.log('deleteCollection', id);

    try {
        const res = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення колекції:', errorData.message || 'помилка');
            console.log('Помилка видалення колекції:')
            return {message: 'Помилка видалення колекції'}
        }
        console.log(' видалення колекції:')
        revalidatePath('/admin/dashboard/collection');


    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}


export async function updateCollection(prevState, formData) {
    const token = cookies().get('adminToken');
    const newcollectionName = formData.get('collection');
    const collectionId = formData.get('id');
    console.log('updateCollection', newcollectionName, collectionId);

    try {
        const res = await fetch(`${API_BASE_URL}/${collectionId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ name: newcollectionName })
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка зміни колекції:', errorData.message || 'помилка');
            return { message: 'Помилка зміни колекції' }
        }
        revalidatePath('/admin/dashboard/collection');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}



 
