'use server'
import { cookies } from "next/headers";

const API_BASE_URL = 'https://clothing-store-api-lh6l.onrender.com/api/v1';


export async function getCategories(params) {
    let res = await fetch (`${API_BASE_URL}/category`)
    let categories = await res.json();
    return categories;
}


export async function getSubCategories(params) {
    let res = await fetch (`${API_BASE_URL}/category`)
    let subCategories = await res.json();
    return subCategories;
}

export async function addCategory(formData) {
    const token = cookies().get('adminToken');
    const category = formData.get('category');
    const image = formData.get('image');

    const catagoryFormData = new FormData();
    catagoryFormData.append('name', category.toString());
    catagoryFormData.append('image', image);
    
    try {
        const res = await fetch(`${API_BASE_URL}/category`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
            body: catagoryFormData,
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання категорії:', errorData.message || 'помилка');
            return {error: 'Помилка додавання категорії'}
        }
        alert('категорії додали');
        return { success: true };

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
}


export async function deleteCategory(formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`${API_BASE_URL}/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token.value}`
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення категорії:', errorData.message || 'помилка');
            return {error: 'Помилка видалення категорії'}
        }
        console.log('категорія видалена');
        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
}


export async function addSubCategory(formData) {
    const token = cookies().get('adminToken');
    const categoryId = formData.get('category');
    const subcategory = formData.get('subcategory');

    try {
        const res = await fetch(`${API_BASE_URL}/sub-category/${categoryId}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ name: subcategory })
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка додавання підкатегорії:', errorData.message || 'помилка');
            return {error: 'Помилка додавання підкатегорії'}
        }
        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }  
}


export async function deleteSubCategory(formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`${API_BASE_URL}/sub-category/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.value}`
            }
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення підкатегорії:', errorData.message || 'помилка');
            return {error: 'Помилка видалення підкатегорії'}
        }

        return true;

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ error: 'Помилка мережі'}
    }
}