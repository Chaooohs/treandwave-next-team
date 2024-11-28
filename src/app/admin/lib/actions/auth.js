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

