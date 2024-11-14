import React from 'react';
import { cn } from '@/lib/utils';

export const Price = ({ price, discount, className }) => {

  let finalPrice = price * (1 - (discount / 100))

  return (
    <>
      {
        discount > 0
          ?
          <div className={cn(`font-semibold uppercase flex items-center gap-x-2`, className)}>
            <span
              className={` line-through text-gray-400 mob:text-sm`}
            >
              {`${price} uah`}
            </span>
            <span>{`${finalPrice.toFixed(2)} uah`}</span>
          </div>
          :
          <div className={cn(`mt-3 font-semibold uppercase flex items-center gap-x-2`, className)}>
            <span>{`${price} uah`}</span>
          </div>
      }
    </>
  )
};

