'use client'
import { useSelector } from "react-redux";

import { Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";


export default function ShoppingCart() {
  const goods = useSelector(state => state.goods.goods);
  const cart = useSelector(state => state.cart.cart);

  return (
    <section>
      <div className="wrap">
        <div className="content">
          <Title text='Кошик' size="xl" className='font-mul font-extrabold uppercase ' />
          <span className="text-lg font-medium uppercase">Усього (2 товари)</span>
          <div className="product-layout">
            <main>
              {Array.isArray(goods) &&
                cart.map((el) => {
                  return (
                    <div key={el.id} className="relative card-cart mt-8 mb-6">
                      <CardForCart el={el} />
                    </div>
                  );
                })}
            </main>
            <aside></aside>
          </div>
        </div>
      </div>
    </section>
  )
}