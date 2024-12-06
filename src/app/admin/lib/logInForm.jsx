'use client';

import { signup } from "./actions/auth";
import { Montserrat } from "next/font/google";
import NotificationModal from "./notificationModal";
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';

const montserrat = Montserrat({
    subsets: ['cyrillic'],
    display: 'swap',
    variable: '--font-montserrat',
    weight: ['400', '500', '600']
  })

  const initialState = {
   message: '',
 };

export default function LogInForm({}) {

    const { pending, error } = useFormStatus();
    const [state, formAction] = useFormState(signup, initialState);

    return(
      <div className="relative">
        <form  className='space-y-3' action={formAction}>
         <div className='flex flex-col rounded-lg bg-slate-50 px-6 pb-4 pt-8 gap-5'>
            <h1 className={`${montserrat.className} mb-3 text-xl `}>
               Будь-ласка авторизуйтесь, щоб продовжити
            </h1>
            <div className='w-full'>
               <div>
                  <label
                     className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                     htmlFor='email'
                  >
                     Email
                  </label>
                  <div className='relative'>
                     <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                        required
                       
                     />
                     
                  </div>
               </div>
               <div className='mt-4'>
                  <label
                     className='mb-3 mt-5 block text-xs font-medium text-gray-900'
                     htmlFor='password'
                  >
                     Password
                  </label>
                  <div className='relative'>
                     <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        required
                        minLength={6}
                        
                     />
                     
                  </div>
               </div>
            </div>
            <button type="submit"  className="bg-[#0047FF] w-full uppercase text-white p-4 rounded">
            {pending ? 'Вхід...' : 'Увійти'}
            </button>

         </div>
      </form>
      <div className=" w-full h-full relative">
         <NotificationModal message={state?.message}/>
      </div>
      </div>
    )
}