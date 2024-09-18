'use client';
import { Button } from '../ui/button.jsx';
import { Input } from '../ui/input.jsx';
import { useState } from 'react';
import { Tag } from 'lucide-react';

export default function CheckoutInput({setDiscount}) {
    const [promo, setPromo] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(0);


    const validPromoCodes = [
        {promo: 'DISCOUNT10', discount: 10},
        {promo: 'SALE20', discount: 20}
    ];

    const handlePromo = () => {
        const foundPromo = validPromoCodes.find(
            (item) => item.promo === promo.trim().toUpperCase()
        );

        if (foundPromo) {
            setIsValid(true);
            setError('');

            setAppliedDiscount(foundPromo.discount);
            setDiscount(foundPromo.discount);
        }

      };
      console.log(appliedDiscount);

    return(
        <div className='flex h-10 text-sm w-full'>
            {isValid ? (
                <div>
                    <div className='bg-[#E2ECFF] rounded-[3px] p-5'>
                        <p className='text-[#0047FF]'>
                            Промокод успішно застосовано! Знижка {appliedDiscount}%  врахована в підсумковій сумі.
                        </p>

                    </div>
                </div>
            ) : (
                <div className=' group flex h-10 w-full'>
                    <div className='relative h-full w-full flex'>
                    <Input
                        type="text"
                        placeholder={`Введіть промокод`}
                        value={promo}
                        onChange={(e) => setPromo(e.target.value)}
                        className={` focus:outline-none focus:border-[1px] pl-10 font-mont border-[1px] border-r-0 rounded-none border-[#BABABA] font-medium  ${error ? 'border-[#C50018] text-[#C50018]' : 'border-stone-300 text-[#121212]'} hover:border-[#0047FF] focus:border-[#0047FF] focus:text-[#121212] focus-visible:ring-0`}
                    />
                    </div>
                    <div className='absolute z-10 rotate-90 pt-[1px] pl-5'>
                        <Tag/>
                    </div>
                    <Button
                        variant='grayBut'
                        className={`font-mont rounded-none h-full font-semibold uppercase group-hover:text-[#0047FF] group-hover:border-[#0047FF] ${error && 'border-[#C50018] text-[#C50018]'}`}
                        onClick={handlePromo}
                    >
                        Застосувати
                    </Button>
                </div>
            )}
            
        </div>
    )
}