'use client'
import { useSelector } from "react-redux"
import Link from "next/link"

import Heart from '../../../public/image/svg/heart-wishlist.svg'
import { Button, Title } from "@/components/ui"
import { Card } from "@/components/shared"


export default function WishList() {
  const wishlist = useSelector(state => state.wishlist.wishlist)

  return (
    <>
      {
        wishlist?.length > 0
          ?
          <main>
            <div className="content h-full lap:mt-6">
              <div className="wrap">
                <div className="flex items-center justify-center flex-col	">
                  <div className="text-center">
                    <Title text={'ваш вішліст'} size="xl" className='font-mul font-extrabold uppercase mb-3 lap:mb-2 lap:text-3xl mob:text-2xl' />
                    <span className="font-medium text-sm">Збережені товари чекають на вас!</span>
                  </div>
                  <div className="card-layout w-full">
                    {
                      Array.isArray(wishlist) &&
                      wishlist.map((el) => {
                        return (
                          <div key={el.id} className="relative">
                            <Card el={el} />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>
          :
          <main className="wrap flex items-center justify-center">
            <div className="w-[612px] flex flex-col items-center text-center mb-6">
              <Heart />
              <Title text={'ваш вішліст порожній'} size="xs" className='font-semibold uppercase mt-3' />
              <span className="font-medium text-sm mt-1">
                Додавайте товари до свого вішлісту. Просто натисніть на іконку серця поруч із товаром, і він з&#39;явиться тут.
              </span>
              <Link href='/'>
                <Button
                  variant='outline'
                  className='w-[130px] h-11 mt-6 uppercase'
                >
                  Каталог
                </Button>
              </Link>
            </div>
          </main>
      }
    </>
  )
}