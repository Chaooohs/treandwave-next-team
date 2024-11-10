'use client';
import { Button } from "../ui";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Settings2 } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

export default function ProfileNavigation() {
    const pathname = usePathname();
    
    return(
        <div className="flex flex-col mob:flex-row lap:flex-row gap-4 pr-5">
            <div className="group">
                    <Link href='/profile' className="flex items-center gap-2 mob:gap-1 group-hover:text-gray-500">
                      
                            
                            <Settings2 className={clsx("stroke-slate-800 text-slate-800 group-hover:text-gray-500 group-hover:stroke-gray-500", {' stroke-blue-700 text-blue-700': pathname === '/profile'})}/>
                       
                        <Button 
                            variant='aboutMenuBut' 
                            className={clsx('p-0 text-base mob:text-sm',{' text-[#0047FF]': pathname === '/profile'},
                            )}>
                                Особисті дані
                        </Button>
                    </Link>
                </div>

                <div className="group">
                    <Link href='/profile/order-history' className="flex items-center gap-2 mob:gap-1 group-hover:text-gray-500">
                        <div className={clsx("stroke-slate-800 text-slate-800 group-hover:text-gray-500 group-hover:stroke-gray-500", {' stroke-blue-700 text-blue-700': pathname === '/profile/order-history'})}>
                            
                            <ShoppingBag className={clsx("stroke-slate-800 text-slate-800 group-hover:text-gray-500 group-hover:stroke-gray-500", {' stroke-blue-700 text-blue-700': pathname === '/profile/order-history'})}/>
                        </div>
                        <Button 
                            variant='aboutMenuBut' 
                            className={clsx('p-0 text-base mob:text-sm',{' text-[#0047FF]': pathname === '/profile/order-history'},
                            )}>
                               Історія замовлень
                        </Button>
                    </Link>
                </div>

        </div>
    )
}