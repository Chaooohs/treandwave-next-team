import Link from 'next/link'

import { Button, Title } from '@/components/ui'
import SadIcon from '../../public/image/svg/sad.svg'


export default function NotFound() {
  return (
    <main className='flex items-center justify-center wrap'>
      <div className='w-[660px] flex flex-col items-center'>
        <div className='font-mul font-extralight text-[9rem] text-[#0047ff] flex items-center gap-x-6 mob:text-8xl mob:gap-x-3'>
          <span>4</span>
          <SadIcon className='mob:w-28' />
          <span>4</span>
        </div>
        <Title text='OOPS!' size='xl' className='font-mul font-extrabold uppercase' />
        <p className='font-medium text-sm	text-center	'>
          Ми не змогли знайти сторінку, яку ви шукали. Можливо, вона була видалена, перейменована або ви ввели неправильну адресу.
        </p>
        <Link href='/catalog'>
          <Button variant='outline' className='w-36	h-11 font-semibold text-base uppercase mt-10 mb-14'>
            Каталог
          </Button>
        </Link>
      </div>
    </main>
  )
}