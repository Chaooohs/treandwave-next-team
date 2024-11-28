'use server';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function getTags(params) {
    
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/tag`)
    let tags = await res.json();
    return tags;
}


export async function addTag(formData) {
    const token = cookies().get('adminToken');
    const tagName = formData.get('tag');

    try {
        const res = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/tag', {
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
            return {error: 'Помилка додавання тега'}
        }

        console.log('Тег додали');
        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
    
}


export async function deleteTag(formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`https://clothing-store-api-lh6l.onrender.com/api/v1/tag`, {
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
            return {error: 'Помилка видалення тега'}
        }

        console.log('Тег видалений');
        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
}



 
