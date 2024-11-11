'use client'
import { Button, Title } from '@/components/ui';

export default function ModalLogOut({handleClose}) {
  
  return (
    <div >
      <div className="font-mont h-screen absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-[#00000026] ">
        <div className="flex flex-col w-[448px] mob:w-5/6 bg-[#FDFDFD] rounded p-6 items-center justify-center gap-6 mob:border-[1px] border-[#212121]">
          <div className='flex flex-col gap-2 items-center justify-center'>
            <Title text='Вийти?' size="md" className='font-semibold uppercase' />
            <p className='text-[#4D4D4D] text-sm'>Ви впевнені, що хочете вийти?</p>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <Button className='font-mont uppercase w-full py-3 '>Вийти</Button>
            <Button 
              variant='outline' className='font-mont uppercase w-full py-3 text-[#0047FF] hover:text-[#336CFF] border-[#0047FF] hover:border-[#336CFF]'
              onClick={handleClose}>
                Скасувати
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}