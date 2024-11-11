'use client';
import { Button } from "../ui";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Settings2 } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

export default function AboutNavigation() {
    const pathname = usePathname();
    const mainLinks = [
        { buttonName:'Про нас', link:'/about'},
        { buttonName:'Контакти', link:'/about/contacts'},
        { buttonName:'Оплата і доставка', link:'/about/payment-and-delivery'},
        { buttonName:'Обмін та повернення', link:'/about/exchange-and-return'},
        { buttonName:'Договір публічної оферти', link:'/about/public-offer'},
        { buttonName:'Політика конфіденційності', link:'/about/privacy-policy'},
    ]

    return(
        <div className="flex flex-col gap-2 pr-5">
            {mainLinks.map((item, index) => (
                <div key={index}>
                    <Link href={item.link}>
                    <Button 
                            variant='aboutMenuBut' 
                            className={clsx('p-0',{' text-[#0047FF]': pathname === item.link},
                            )}>
                                {item.buttonName}
                                </Button>
                    </Link>
                </div>
            ))}

        </div>
    )

}