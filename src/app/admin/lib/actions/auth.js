'use server';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const cookieStore = cookies();
    
    const response = await fetch('https://clothing-store-api-lh6l.onrender.com/api/v1/auth/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            'email': email, 
            'password': password
        }),
    });
    if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;

        // Установка cookie для токена
        cookies().set('adminToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 2, // 2 hours
            path: '/',
        });

        redirect('/admin/dashboard');
        return true;
        
    } else {
        console.error('Authorithation error');
        return { error: 'Authentication failed' };
    }

}

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



 
