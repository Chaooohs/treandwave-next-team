import React from 'react';
import { cn } from '@/lib/utils';

export const PriceCart = ({ price, discount, sizeP, sizeD, className, count }) => {

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
            <span>{`${(price * count) * (1 - (discount / 100))} uah`}</span>
          </div>
          :
          <div className={cn(`mt-3 font-medium ${sizeP} uppercase flex items-center gap-x-2 lap:text-sm`, className)}>
            <span>{`${(price * count).toLocaleString("ru")} uah`}</span>
          </div>
      }
    </>
  )
};

