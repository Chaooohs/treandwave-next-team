'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Heart from '/public/image/svg/heart.svg'
import { Button, Colors, Title, Price, Sizes } from "@/components/ui";
import { Accordion, Card } from "@/components/shared";
import { addToWishList } from "@/redux/features/wishlistSlice";
import { addToCart } from "@/redux/features/cartSlice";
import { useGetSingleProductQuery } from "@/redux/api/goodsApi";


export default function Page() {

  const path = usePathname()
  const { data: product } = useGetSingleProductQuery(`${path}`)


  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.wishlist)
  const goods = useSelector((state) => state.goods.goods);
  const { color, size } = useSelector(state => state.texture)
  const index = useSelector(state => state.colorCard.index)
  const ref = useRef()
  const btnToCartRef = useRef()
  const [indexImage, setIndexImage] = useState(0)
  const [isSelectedSize, setIsSelectedSize] = useState(false)


  useEffect(() => {
    const found = wishlist.find(el => el.id === product.id)
    if (found) {
      ref.current.disabled = true;
      // ref.current.setAttribute('disabled', 'disabled');
    }
  }, [wishlist])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!isSelectedSize) {
      btnToCartRef.current.disabled = true;
    } else {
      btnToCartRef.current.disabled = false;
    }
  }, [isSelectedSize])

  const handleClick = (index) => {
    setIndexImage(index)
  }

  const handleClickSize = () => {
    setIsSelectedSize(true)
  }

  const handleClickToWishList = () => {
    const a = {
      id: product.id,
      title: product.title,
      colors: product?.colors,
      price: product.price,
      discount: product.discount,
    }
    dispatch(addToWishList(a))
  }


  const handleClickToCart = () => {
    const a = {
      id: product.id,
      title: product.title,
      images: product?.colors[index]?.images[indexImage]?.imageUrl,
      price: product.price,
      discount: product.discount,
      color: color,
      size: size,
      count: 1,
    }
    dispatch(addToCart(a))
  }

  return (
    <main>
      <div className="wrap">
        <div className="content">
          <div className="product-layout">
            <main>
              <div className="flex gap-4 lap:flex-col lap:gap-y-2">
                <div className="flex flex-col gap-3 lap:order-2 lap:flex-row">
                  {
                    product?.colors[index]?.images.map((img, index) => {
                      return (
                        <Image
                          key={index}
                          src={img.imageUrl}
                          alt={product.alt}
                          width={124}
                          height={156}
                          onClick={() => handleClick(index)}
                          className="w-[124px] h-[156px] object-cover lap:w-[80px] lap:h-[104px] cursor-pointer"
                          style={index === indexImage
                            ? { border: '1px solid #121212' }
                            : { border: '1px solid transparent' }}
                        />
                      )
                    })
                  }
                </div>
                <div className="w-full lap:order-1">
                  {
                    <Image src={product?.colors[index]?.images[indexImage]?.imageUrl} alt={product?.title} width={580} height={828} />
                  }
                </div>
              </div>
            </main>
            <aside>

              <Title text={product?.title} size="lg" className='font-mul uppercase font-extrabold lap:text-2xl lap:mt-6' />

              <Price
                price={product?.price}
                discount={product?.discount}
                sizeP='text-2xl'
                sizeD='text-lg'
                className='font-medium mt-3 lap:text-lg lap:mt-2'
              />

              <div className="mt-8 gap-x-4">
                <Title text='колір:' size="xs" className='font-semibold uppercase lap:text-base' />
                <Colors colors={product?.colors} width='24px' height='24px' className='mt-3' />
              </div>

              <Title text='розмір:' size="xs" className='font-semibold uppercase mt-8 lap:text-base' />
              <Sizes colors={product?.colors} width='58px' height='36px' className='mt-3' onHandleClick={handleClickSize} />

              <div className="flex my-8 lap:flex-col lap:gap-y-3">
                <Button
                  ref={ref}
                  variant='outline'
                  className='button-outline mr-2 w-[182px] h-[52px] text-base font-semibold uppercase flex items-center gap-x-1 lap:order-2 lap:w-full'
                  onClick={handleClickToWishList}
                >
                  <Heart className='w-6' />
                  до вішлісту
                </Button>
                <Button
                  ref={btnToCartRef}
                  className=' w-full max-w-[409px] h-[52px] text-base font-semibold uppercase lap:order-1 lap:max-w-full'
                  onClick={handleClickToCart}
                >Додати в кошик
                </Button>
              </div>
              <div>
                <Accordion text='опис товару' description={product?.description} />
                <Accordion text='оплата та доставка' />
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
    </main>
  )
}