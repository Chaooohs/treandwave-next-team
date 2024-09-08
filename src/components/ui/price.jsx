import React from 'react';
import { cn } from '@/lib/utils';

export const Price = ({ price, discount, sizeP, sizeD, className }) => {

  let finalPrice = price * (1 - (discount / 100))

  return (
    <>
      {
        discount > 0
          ?
          <div className={cn(`font-semibold ${sizeP} uppercase flex items-center gap-x-2`, className)}>
            <span
              className={`${sizeD} line-through text-gray-400`}
            >
              {`${price} uah`}
            </span>
            <span>{`${finalPrice.toFixed(2)} uah`}</span>
          </div>
          :
          <div className={cn(`mt-3 font-semibold ${sizeP} uppercase flex items-center gap-x-2`, className)}>
            <span>{`${price} uah`}</span>
          </div>
      }
    </>
  )
};

