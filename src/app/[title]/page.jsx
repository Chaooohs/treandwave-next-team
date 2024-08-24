'use client'
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import { Button, Colors, Title, Price } from "@/components/ui";


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
                          key={index}
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

              <Price
                price={product.price}
                discount={product.discount}
                sizeP='text-2xl'
                sizeD='text-lg'
                className='mt-3'
              />

              <Title text='колір' size="xs" className='font-semibold uppercase mt-8' />
              <Colors colors={product.colors} width='36px' height='36px' />

              {/* <div>
                {
                  product.size.map(el => {
                    return (
                      <Button />
                    )
                  })
                }
              </div> */}
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