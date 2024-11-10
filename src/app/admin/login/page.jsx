
import LogInForm from '../lib/logInForm';
import { Metadata } from 'next';

export const metadata = {
   title: 'Login',
};

// export async function adminLogin(username, password) {
//     const response = await fetch('/api/v1/auth/admin/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
  
//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem('adminToken', data.token);
//       return true;
//     } else {
//       console.error('Ошибка авторизации');
//       return false;
//     }
//   }

export default function LoginPage() {

   return (
      <main className='flex items-center justify-center md:h-screen'>
         <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
            <div className='flex h-20 w-full text-white uppercase items-center justify-center rounded bg-[#0047FF] p-3 '>
                Admin panel - trandwave
            </div>
            <LogInForm />
         </div>
      </main>
   );
}