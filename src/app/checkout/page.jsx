'use client'
import { useSelector } from "react-redux";

import { Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";


export default function ShoppingCart() {
  const goods = useSelector(state => state.goods.goods);
  const cart = useSelector(state => state.cart.cart);

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  return (
    <section>
      <div className="wrap">
        <div className="content">
          <Title text='Кошик' size="xl" className='font-mul font-extrabold uppercase ' />
          <div className="text-lg font-medium uppercase">
            Усього (
            <span className="w-9 inline-block text-center">{counter}</span>
            товари )
          </div>
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
            <aside>

            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}