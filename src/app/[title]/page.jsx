'use client'
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import { Button, Title } from "@/components/ui";


export default function Product() {
  const product = useSelector(state => state.product.product)
  const [indexImage, setIndexImage] = useState(0)

  const handleClick = (index) => {
    setIndexImage(index)
  }

  return (
    <section>
      <div className="wrap">
        <div className="content">
          <div className="product-layout">
            <main>
              <div className="flex gap-4">
                <div className="flex flex-col gap-3">
                  {
                    product.images.map((img, index) => {
                      return (
                        <Image
                          src={img}
                          alt={product.title}
                          width={124}
                          height={156}
                          onClick={() => handleClick(index)}
                          className="w-[124px] h-[156px] object-cover"
                          style={index === indexImage
                            ? { border: '1px solid #121212' }
                            : { border: '1px solid transparent' }}
                        />
                      )
                    })
                  }
                </div>
                <div className="w-full ">
                  <Image src={product.images[indexImage]} alt={product.title} width={580} height={828} />
                </div>
              </div>
            </main>
            <aside>
              <Title text={product.title} size="lg" className='uppercase font-semibold' />
              <div className="mt-3 font-semibold text-2xl uppercase">
                <span></span>
                <span>{`${product.price} uah`}</span>
              </div>
              <div>
                {
                  product.color.map(el => {
                    return (
                      <Button />
                    )
                  })
                }
              </div>
              <div>
                {
                  product.size.map(el => {
                    return (
                      <Button />
                    )
                  })
                }
              </div>
              <div>
                <Button>до вішлісту</Button>
                <Button>Додати в кошик</Button>
              </div>
              <div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}