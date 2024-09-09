import { Title } from "@/components/ui";
import Image from "next/image";
import Fb from '/public/image/svg/facebook.svg';
import Inst from '/public/image/svg/inst.svg';
import Telegram from '/public/image/svg/telegram.svg';
import TikTok from '/public/image/svg/tikTok.svg';
import Link from "next/link";
import { FactoryIcon, Mail } from 'lucide-react';
import { Phone } from 'lucide-react';


export default function Page() {
    const textPage = {
        title: 'Контакти',
    }
    return(
        <div className="mob:border-none lap:border-l-[1px] font-mont border-[#EDEDED] w-full mob:px-0 lap:px-10 flex flex-col gap-5">
            <Title text={textPage.title} size="lg" className='mob:hidden lap:block font-semibold uppercase ' />
            <div className="flex gap-2">
                <Phone/>
                <p>+380501235080</p>
            </div>
            <div className="flex gap-2">
                <Mail/>
                <p>trendwave2024@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <Link href='https://uk-ua.facebook.com/'>
                <Fb fill='#121212' stroke='#121212'/>
              </Link>
              <Link href='https://www.instagram.com/'>
                <Inst fill='#121212' stroke='#121212'/>
              </Link>
              <Link href='https://web.telegram.org/'>
                <Telegram fill='#121212' stroke='#121212'/>
              </Link>
              <Link href='https://www.tiktok.com/uk-UA/'>
                <TikTok fill='#121212' stroke='#121212'/>
              </Link>
            </div>
            
        </div>
    )
}