
import LogInForm from '../lib/forms/logInForm';


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