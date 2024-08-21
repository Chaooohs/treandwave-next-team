
import Title2 from "../ui/title2";
import { Button } from "../ui/button";
import fb from '/public/image/svg/facebook.svg';
import inst from '/public/image/svg/inst.svg';
import telegram from '/public/image/svg/telegram.svg';
import tikTok from '/public/image/svg/tikTok.svg';
import Link from "next/link";
import Logo from "../ui/logo";
import Image from "next/image";


export const Footer = () => {

  const iconLinks = [
    {
      icon: fb,
      href:''
    },
    {
      icon: inst,
      href:''
    },
    {
      icon: telegram,
      href:''
    },
    {
      icon: tikTok,
      href:''
    },
  
  ]
  const footerLinks = [
    {
      title:'каталог',
      href:'',
      items:
      [
        {
          subtitle:'sale',
          href:''
        },
        {
          subtitle:'Нова колекція',
          href:''
        },
        {
          subtitle:'Бестселери',
          href:''
        },
        {
          subtitle:'Колекції',
          href:''
        },
      ]
    },
    {
      title:'Покупцям',
      href:'',
      items:
      [
        {
          subtitle:'про нас',
          href:''
        },
        {
          subtitle:'оплата і доставка',
          href:''
        },
        {
          subtitle:'повернення',
          href:''
        },
      ]
    }
  ]
  return (
    <footer>
      <div className="font-mont bg-[#121212] text-white">
        <div className="px-10 md:px-24 grid  md:grid-cols-2 gap-5 md:gap-20 py-20">
          <div className="flex flex-col gap-5 justify-center">
            <div>
              <Logo className={'text-white'}/>
            </div>
            <div className="flex gap-3">
                {iconLinks.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <Image src={item.icon} alt={item.icon} width={24}/>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex gap-10 md:gap-20">
            {footerLinks.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                  <Title2 text={item.title}/>
                  <div className="">
                    {item.items.map((item, index) => (
                      <div key={index}>
                        {item.subtitle.toLocaleLowerCase() === 'sale' ? (
                          <Button variant="buttonRed" size="base">{item.subtitle}</Button>
                        ) : (
                          <Button variant="button2" size="base">{item.subtitle}</Button>
                        )}
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
          <div>
            <p className="font-medium text-sm">
              © 2024 TreandWave
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
