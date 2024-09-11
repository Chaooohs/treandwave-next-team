import { CartFull } from "./CartFull";
import { CartEmpty } from "./CartEmpty";


export default function ShoppingCart({ counter }) {
  return (
    <>

      

      {
        counter > 0
          ?
          <CartFull />
          :
          <CartEmpty/>
      }
    </>
  )
}