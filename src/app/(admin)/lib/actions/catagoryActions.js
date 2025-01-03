'use server'
import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export async function getCategories(params) {
    let res = await fetch (`${API_BASE_URL}/category`, { cache: 'no-store' })
    let categories = await res.json();
    revalidatePath('/admin/dashboard/category');
    return categories;
}


export async function getSubCategories(params) {
    let res = await fetch (`${API_BASE_URL}/category`)
    let subCategories = await res.json();
    return subCategories;
}

export async function addCategory(prevState, formData) {
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
            return {message: 'Помилка додавання категорії'}
        }
        revalidatePath('/admin/dashboard/category');
        return{message: 'Category added successfully'}

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}


export async function deleteCategory(prevState, formData) {
    const token = cookies().get('adminToken');
    const id = formData.get('id');

    try {
        const res = await fetch(`${API_BASE_URL}/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token.value}`
            }
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Помилка видалення категорії:', errorData.message || 'помилка');
            return {message: 'Помилка видалення категорії'}
        }
        revalidatePath('/admin/dashboard/category');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}


export async function addSubCategory(prevState, formData) {
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
            return {message: 'Помилка додавання підкатегорії'}
        }
        revalidatePath('/admin/dashboard/category');
        return{message: 'Subcategory added successfully'};

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }  
}


export async function deleteSubCategory(prevState, formData) {
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
            return {message: 'Помилка видалення підкатегорії'}
        }
        revalidatePath('/admin/dashboard/category');

    } catch (error) {
        console.error('Помилка мережі:', error.message);
        return{ message: 'Помилка мережі'}
    }
}