'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { Button, Colors, Title, Price, Sizes } from "@/components/ui";
import { Accordion, Card } from "@/components/shared";
import { addToWishList } from "@/redux/features/wishlistSlice";
import { addToCart } from "@/redux/features/cartSlice";
import Heart from '../../../public/image/svg/heart.svg'


export default function Product() {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.product)
  const wishlist = useSelector(state => state.wishlist.wishlist)
  const goods = useSelector((state) => state.goods.goods);
  const { color, size } = useSelector(state => state.texture)
  const [indexImage, setIndexImage] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const found = wishlist.find(el => el.id === product.id)
    if (found) {
      ref.current.disabled = true;
      // ref.current.setAttribute('disabled', 'disabled');
    }
  }, [wishlist])

  const handleClick = (index) => {
    setIndexImage(index)
  }

  const handleClickToWishList = () => {
    const a = {
      id: product.id,
      title: product.title,
      images: product.images,
      price: product.price,
      discount: product.discount,
    }
    dispatch(addToWishList(a))
  }

  const handleClickToCart = () => {
    const a = {
      id: product.id,
      title: product.title,
      images: product.images,
      price: product.price,
      discount: product.discount,
      color: color,
      size: size,
      count: 1,
    }
    console.log(a)
    dispatch(addToCart(a))
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
              <Colors colors={product.colors} width='36px' height='36px' className='mt-3' />

              <Title text='розмір' size="xs" className='font-semibold uppercase mt-8' />
              <Sizes sizes={product.sizes} width='58px' height='36px' className='mt-3'/>

              <div className="flex my-8">
                <Button
                  ref={ref}
                  variant='outline'
                  className='mr-2 w-[176px] h-[52px] text-base font-semibold uppercase flex items-center gap-x-1'
                  onClick={handleClickToWishList}
                >
                  <Heart />
                  до вішлісту
                </Button>
                <Button
                  className=' w-full max-w-[409px] h-[52px] text-base font-semibold uppercase'
                  onClick={handleClickToCart}
                >Додати в кошик
                </Button>
              </div>
              <div>
                <Accordion text='Опис товару' />
                <Accordion text='Оплата та доставка' />
                <Accordion text='повернення та обмін' />
              </div>
            </aside>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="content">
            <Title text='З цим товаром купують' className='text-2xl font-semibold uppercase' />
            <div className="card-layout mt-6">
              {Array.isArray(goods) &&
                goods.map((el) => {
                  return (
                    <div key={el.id} className="relative">
                      <Card el={el} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="content">
            <Title text='Вам може сподобатися' className='text-2xl font-semibold uppercase' />
            <div className="card-layout mt-6">
              {Array.isArray(goods) &&
                goods.map((el) => {
                  return (
                    <div key={el.id} className="relative">
                      <Card el={el} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}