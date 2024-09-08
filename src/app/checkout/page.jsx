'use client'
import { useSelector } from "react-redux";

import { Title } from "@/components/ui";
import { CardForCart } from "@/components/shared";


export default function ShoppingCart() {
  const goods = useSelector(state => state.goods.goods);
  const cart = useSelector(state => state.cart.cart);

  const counter = cart?.reduce((sum, el) => el.count + sum, 0);

  return (
    <main>
      <div className="wrap">
        <div className="content">
          <Title text='Кошик' size="xl" className='font-mul font-extrabold uppercase  mob:text-3xl' />
          <div className="text-lg font-medium uppercase lap:text-base	mob:mt-2">
            Усього (
            <span className="w-9 inline-block text-center">{counter}</span>
            товари )
          </div>
          <div className="product-layout mt-10 lap:mt-6">
            <main>
              {Array.isArray(goods) &&
                cart.map((el) => {
                  return (
                    <div key={el.id} className="relative card-cart mb-6 mob:mb-3 rounded">
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
    </main>
  )
}