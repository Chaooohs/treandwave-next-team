'use client'
import { useRouter } from 'next/navigation'
import Image from "next/image";

import signImage from '/public/image/jpg/signin.jpg'
import CloseIcon from '/public/image/svg/close.svg'
import { SigninForm } from "@/components/shared";
import { Title } from "@/components/ui";



export default function Modal() {
  const router = useRouter()


  return (
    <main>
      <div className="h-screen absolute top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center bg-[#00000026] ">
        <div className="grid grid-cols-2 w-[976px] bg-[#fdfdfd] rounded p-2">
          <div>
            <Image src={signImage} />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <Title text='Увійти' size="md" className='font-semibold uppercase' />
              <button onClick={() => router.back()}>
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
          </div>
        </div>
      </div>
    </main>
  )
}