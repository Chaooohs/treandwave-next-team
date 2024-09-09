import { Title } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import VisaLogo from '/public/image/svg/visa-logo.svg';
import MoneyIcon from '/public/image/svg/money.svg';
import NovaPoshtaIcon from '/public/image/svg/novaposhta.svg';
import MasterCard from '/public/image/svg/mastercard-logo.svg';
import ApplepayIcon from '/public/image/svg/applepay-logo.svg';



export default function Page() {
    const textPage = {
        title: 'Оплата і доставка',
        subtitle: 'Як відбувається оплата на сайті?',
        p1:'Усі замовлення, які виконуються на нашому сайті, можна оплатити за допомогою банківських карт. Підтримуємо VISA, MasterCard та інші платіжні системи. Або сплачуйте післяплатою при отриманні.',
        p2: 'Після оформлення замовлення ви отримаєте автоматичне повідомлення на свою пошту.',
        subtitle2: 'Як відбувається доставка мого замовлення?',
        p3: 'Ми доставляємо товари по всій Україні  за допомогою служби «Нова Пошта». Відправка замовлення здійснюється  протягом 1-2 днів, за наявності товару на складі. У разі відсутності  товару в наявності, наш менеджер повідомить вам срок виготовлення виробу  та доставки.',
        li: ['Нова Пошта до відділення — 79 грн', 'Нова Пошта «Кур’єр» — 99 грн'],
        p4:'Послуга безкоштовної доставки діє при замовленні від 2500 грн за умови повної оплати.'
    }
    return(
        <div className="border-l-[1px] mob:border-none lap:border-l-[1px] font-mont border-[#EDEDED] text-sm w-full px-10 mob:px-0 lap:px-10 flex flex-col gap-5 text-[#4D4D4D]">
            <Title text={textPage.title} size="lg" className='mob:hidden lap:block font-semibold uppercase text-[#212121]' />
            <div className="flex gap-3">
                <div>
                    <MoneyIcon/>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="h-10 flex items-center">
                        <Title text={textPage.subtitle} size="xs" className='font-semibold uppercase text-[#212121]' />
                    </div>
                    <p>{textPage.p1}</p>
                    <div className="flex gap-2 items-center">
                        <div className="h-10 px-3 border-[1px] rounded-[6px] border-[#F7F7F7] flex items-center"><VisaLogo /></div>
                        <div className="h-10 px-3 border-[1px] rounded-[6px] border-[#F7F7F7] flex items-center"><MasterCard /></div>
                        <div className="h-10 px-3 border-[1px] rounded-[6px] border-[#F7F7F7] flex items-center"><ApplepayIcon /></div>
                    </div>
                    <p>{textPage.p2}</p>
                </div>
            </div>
            <div className="h-[1px] bg-[#EDEDED]"></div>
            <div className="flex gap-3">
                <div>
                    <NovaPoshtaIcon/>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="h-10 flex items-center">
                        <Title text={textPage.subtitle2} size="xs" className='font-semibold uppercase text-[#212121]' />
                    </div>
                    <p>{textPage.p3}</p>
                    <ul className="flex flex-col gap-2 list-disc list-inside">
                        {textPage.li.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="font-semibold">{textPage.p4}</p>
                </div>
            </div>
        </div>
    )
}