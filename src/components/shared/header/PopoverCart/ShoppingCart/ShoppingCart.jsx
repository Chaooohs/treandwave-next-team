import { Title } from "@/components/ui";
import { CartFull } from "./CartFull";
import { CartEmpty } from "./CartEmpty";


export default function ShoppingCart({ counter }) {
  return (
    <div className="pt-6 box-border">

      <Title text='Кошик' className='text-2xl uppercase font-semibold mt-6 px-6 box-border' />

      {
        counter > 0
          ?
          <CartFull />
          :
          <CartEmpty/>
      }
    </div>
  )
}