
import Title2 from "../ui/title2";
import { Button } from "../ui/button";
import Fb from '/public/image/svg/facebook.svg';
import Inst from '/public/image/svg/inst.svg';
import Telegram from '/public/image/svg/telegram.svg';
import TikTok from '/public/image/svg/tikTok.svg';
import Link from "next/link";
import Logo from '/public/image/svg/logo.svg'


export const Footer = () => {

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'каталог',
      href: '/catalog',
      items:
        [
          {
            subtitle: 'sale',
            href: '/sale'
          },
          {
            subtitle: 'Нова колекція',
            href: '/collections'
          },
          {
            subtitle: 'Бестселери',
            href: ''
          },
          {
            subtitle: 'Колекції',
            href: '/collections'
          },
        ]
    },
    {
      title: 'Покупцям',
      href: '',
      items:
        [
          {
            subtitle: 'про нас',
            href: '/about'
          },
          {
            subtitle: 'оплата і доставка',
            href: '/about/payment-and-delivery'
          },
          {
            subtitle: 'повернення',
            href: '/about/exchange-and-return'
          },
        ]
    }
  ]
  return (
    <footer>
      <div className="font-mont bg-[#121212] text-white">
        <div className="px-5 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 py-20">
          <div className="flex flex-col gap-5 justify-center">
            <div>
              <Logo fill='white' stroke='white' className={''} />
            </div>
            <div className="flex gap-3">
              <Link href='https://uk-ua.facebook.com/'>
                <Fb fill="#FDFDFD"/>
              </Link>
              <Link href='https://www.instagram.com/'>
                <Inst fill="#FDFDFD"/>
              </Link>
              <Link href='https://web.telegram.org/'>
                <Telegram fill="#FDFDFD"/>
              </Link>
              <Link href='https://www.tiktok.com/uk-UA/'>
                <TikTok fill="#FDFDFD"/>
              </Link>
            </div>
          </div>
          <div className="flex gap-5 md:gap-20 justify-between md:justify-start">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <Title2 text={item.title} />
                <div className="flex flex-col gap-1">
                  {item.items.map((item, index) => (
                    <div key={index}>
                      {item.subtitle.toLocaleLowerCase() === 'sale' ? (
                        <Link href={item.href}>
                          <Button variant="buttonRed" size="base" className=' rounded-none py-1'>{item.subtitle}</Button>
                        </Link>
                      ) : (
                        <Link href={item.href}>
                          <Button variant="button2" size="base" className='rounded-none py-1'>{item.subtitle}</Button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-medium text-sm">
              © {currentYear} TreandWave
            </p>
          </div>
          <div>
            <p className="font-medium text-sm">
              Політика конфіденційності
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
