'use client'
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'

import CloseIcon from '/public/image/svg/close.svg'
import { SigninButton, SigninForm } from "@/components/shared";
import { Title } from "@/components/ui";



export default function Modal() {
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    if (path === '/login') {
      document.body.classList.add('no-scroll')
    }
  }, [path])

  const handleClose = () => {
    router.back()
    document.body.classList.remove('no-scroll')
  }


  return (
    <main>
      <div className="h-screen absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-[#00000026] ">
        <div className="grid grid-cols-2 w-[976px] bg-[#fdfdfd] rounded p-2
              lap:w-[720px] lap:grid-cols-[1fr_2fr]
              mob:absolute top-[104px] bottom-0 mob:grid-cols-1 mob:w-full overflow-auto">
          <div className='modal-image flex flex-col justify-center text-center mob:hidden'>
            <h1 className='text-mul text-6xl text-[#fdfdfd] uppercase font-extrabold lap:text-3xl'>
              New collection
            </h1>
            <p className='text-2xl text-[#fdfdfd] uppercase font-semibold mt-3 lap:text-base'>
              autumn `24
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Title text='Увійти' size="md" className='font-semibold uppercase' />
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <p className="mt-3 font-medium text-sm leading-5">
              Авторизуйтеся, щоб відстежувати замовлення в особистому кабінеті.
            </p>
            <p className="mt-1 font-medium text-sm leading-5">
              Якщо не бажаєте реєструватися, не хвилюйтеся — ми надішлемо всі сповіщення про ваше замовлення на електронну пошту.
            </p>
            <SigninForm />
            <p className="mt-8 font-medium text-sm leading-5 text-center">
              або
            </p>
            <SigninButton />
          </div>
        </div>
      </div>
    </main>
  )
}