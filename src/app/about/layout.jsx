'use client';
import { usePathname } from 'next/navigation';
import AboutNavigation from "@/components/shared/aboutNvigation";
import MailForm from "@/components/shared/mailForm";
import Link from "next/link";
import { Button } from "@/components/ui";
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function AboutLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    const mainLinks = [
        { buttonName:'Про нас', link:'/about'},
        { buttonName:'Контакти', link:'/about/contacts'},
        { buttonName:'Оплата і доставка', link:'/about/payment-and-delivery'},
        { buttonName:'Обмін та повернення', link:'/about/exchange-and-return'},
        { buttonName:'Договір публічної оферти', link:'/about/public-offer'},
        { buttonName:'Політика конфіденційності', link:'/about/privacy-policy'},
    ]

    const handleClick = (link) => {
        router.push(link)
      }

      const handlePrefetch = (link) => {
        router.prefetch(link)
      }

    return (
        <main className="w-full ">
            <div className="mob:hidden lap:flex w-full pt-10 pb-20 px-5 lg:px-10 flex">
                <AboutNavigation/>
                {children}
            </div>

            <div className="hidden lap:hidden w-full pt-10 pb-20 px-5 lg:px-10 mob:flex ">
                <div className="flex w-full flex-col gap-2 pr-5">
                    <Accordion type="single" collapsible>
                        {mainLinks.map((item, index) => (
                            <div key={index}>
                                <AccordionItem value={`item-${index + 1}"`}>
                                    <AccordionTrigger 
                                        onMouseEnter={() => handlePrefetch(item.link)}
                                        onClick={() => handleClick(item.link)}>{item.buttonName}</AccordionTrigger>
                                    <AccordionContent>
                                        {children}
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
  )}