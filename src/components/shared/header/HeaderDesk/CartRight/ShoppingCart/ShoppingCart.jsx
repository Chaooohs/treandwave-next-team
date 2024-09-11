import { CartFull } from "./CartFull";
import { CartEmpty } from "./CartEmpty";


export default function ShoppingCart({ counter, setIsOpen }) {
  return (
    <>
      {
        counter > 0
          ?
          <CartFull setIsOpen={setIsOpen} />
          :
          <CartEmpty/>
      }
    </>
  )
}