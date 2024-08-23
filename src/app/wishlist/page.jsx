'use client'
import { useSelector } from "react-redux"
import Link from "next/link"

import Heart from '../../../public/image/svg/heart-wishlist.svg'
import { Button, Card, Title } from "@/components/ui"


export default function WishList() {
  const wishlist = useSelector(state => state.wishlist.wishlist)

  return (
    <main>
      {
        wishlist.length > 0
          ?
          <div className="wrap">
            <div className="content">
              <div className="text-center">
                <Title text={'ваш вішліст'} size="xl" className='font-mul font-extrabold uppercase' />
                <span className="font-medium text-sm">Збережені товари чекають на вас!</span>
              </div>
              <div className="card-layout">
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
          :
          <div className="h-full flex items-center justify-center">
            <div className="w-[612px] flex flex-col items-center text-center">
              <Heart />
              <Title text={'ваш вішліст порожній'} size="xs" className='font-semibold uppercase mt-3' />
              <span className="font-medium text-sm mt-1">
                Додавайте товари до свого вішлісту. Просто натисніть на іконку серця поруч із товаром, і він з'явиться тут.
              </span>
              <Link href='/'>
                <Button
                  variant='outline'
                  className='w-[130px] h-11 mt-6'
                >
                  Каталог
                </Button>
              </Link>
            </div>
          </div>
      }

    </main>
  )
}