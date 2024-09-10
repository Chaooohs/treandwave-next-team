
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
        <div className="px-24 mob:px-5 lap:px-10 grid grid-cols-[1fr,_3fr] lap:grid-cols-[1fr,_2fr] mob:grid-cols-1 gap-20 lap:gap-5 py-20 mob:py-10">
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <Logo className='footer-logo'/>
            </div>
            <div className="flex gap-3">
              <Link href='https://uk-ua.facebook.com/'>
                <Fb fill="#FDFDFD" />
              </Link>
              <Link href='https://www.instagram.com/'>
                <Inst fill="#FDFDFD" />
              </Link>
              <Link href='https://web.telegram.org/'>
                <Telegram fill="#FDFDFD" />
              </Link>
              <Link href='https://www.tiktok.com/uk-UA/'>
                <TikTok fill="#FDFDFD" />
              </Link>
            </div>
          </div>
          <div className="flex gap-20 mob:gap-5 justify-start mob:justify-between mob:mt-16 mob:row-start-2 mob:row-end-3 mob:col-start-1 col-end-3">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <Title2 text={item.title} />
                <div className="flex flex-col gap-1">
                  {item.items.map((item, index) => (
                    <div key={index}>
                      {item.subtitle.toLocaleLowerCase() === 'sale' ? (
                        <Link href={item.href}>
                          <Button variant="buttonRed" size="base" className=' rounded-none py-1 mob:text-xs'>{item.subtitle}</Button>
                        </Link>
                      ) : (
                        <Link href={item.href}>
                          <Button variant="button2" size="base" className='rounded-none py-1 mob:text-xs'>{item.subtitle}</Button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span className="font-medium text-sm lap:text-xs mt-8 lap:mt-[28px] mob:mt-6 mob:row-start-3 mob:row-end-4">
            © {currentYear} TreandWave
          </span>
          <span className="font-medium text-sm lap:text-xs mt-8 lap:mt-[28px] mob:mt-6 mob:row-start-3 mob:row-end-4">
            Політика конфіденційності
          </span>
        </div>
      </div>
    </footer>
  );
};
