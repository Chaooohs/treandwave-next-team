import { CartFull } from "./CartFull";
import { CartEmpty } from "./CartEmpty";


export default function ShoppingCart({ counter, onHandleClick }) {
  return (
    <>
      {
        counter > 0
          ?
          <CartFull onHandleClick={onHandleClick} />
          :
          <CartEmpty/>
      }
    </>
  )
}