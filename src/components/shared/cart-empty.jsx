import Link from "next/link"
import { Button, Title } from "../ui"
import CloseBig from '../../../public/image/svg/cart-big.svg'


export const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center pb-14">
      <CloseBig className='mt-10' />
      <Title text='кошик пустий' size="xs" className='font-semibold uppercase mt-3' />
      <p className="font-medium text-center mt-1">У вашому кошику поки що немає товарів. Перегляньте наш каталог, щоб ознайомитися з усіма товарами та пропозиціями.</p>
      <Link href='/'>
        <Button variant='outline' className='mt-8 uppercase font-semibold text-sm'>Каталог</Button>
      </Link>
    </div>
  )
}