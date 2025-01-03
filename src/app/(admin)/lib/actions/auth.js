'use server';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const cookieStore = cookies();

    console.log("Starting signup action...");
    console.log("Received form data:", { email, password });

   
        const response = await fetch(`${API_BASE_URL}/auth/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: email, 
                password: password
            }),
        });

        console.log("API response status:", response.status);
        if (!response.ok) {
            const errorDetails = await response.json().catch(() => ({}));
            console.error("API error details:", errorDetails);
            return { message: errorDetails.message || 'Authentication failed' };
        }

        const data = await response.json();
        console.log("API response data:", data);

        const token = data.accessToken;
        console.log("Access token received:", token);

        // Установка cookie для токена
        cookieStore.set('adminToken', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 2, // 2 часа
        });

        console.log("Cookie set successfully.");
        redirect('/admin');

    
}