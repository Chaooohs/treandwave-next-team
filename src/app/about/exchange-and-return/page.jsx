import { Title } from "@/components/ui";


export default function Page() {
    const textPage = {
        title: 'Обмін та повернення',
        subtitle: 'Умови повернення товару',
        p1: 'Протягом 14 днів з моменту покупки ви можете обміняти або повернути товар, який не підійшов. Для того щоб  здійснити обмін чи повернення необхідно дотримуватися певних умов:',
        li: [
            'Наявне підтвердження оплати товару та доставки;',
            'Товар не використовувався або носився;',
            'Збережено товарний вигляд, споживчі характеристики та відсутній брак товару (етикетки та інше маркування виробника, оригінальна упаковка).'
        ],
        subtitle2: 'шлях поверненя та обміну',
        p2: 'Щоб повернути товар необхідно:',
        li2: [
            'Повідомте нам про бажання повернути товар через Instagram;',
            'Переконатися, що товар підлягає поверненню, згідно з описаними умовами;',
            'Вкажіть реквізити картки для повернення суми.',
            'Повернення товару здіснюється тією ж поштовою службою, якою було здійснене відправлення. '
        ],
        p3: 'Щоб обміняти товар необхідно:',
        li3: [
            'Повідомте нам про бажання обміняти товар через Instagram;',
            'Переконатися, що товар підлягає обміну, згідно з описаними умовами;',
            'Повідомте модель і розмір, на який ви хочете обміняти товар.',
            'Обмін товару здіснюється тією ж поштовою службою, якою було здійснене відправлення. '
        ]

    }


    return(
        <div className="mob:border-none lap:border-l-[1px] font-mont border-[#EDEDED] w-full mob:px-0 lap:px-10 flex flex-col gap-5">
            <Title text={textPage.title} size="lg" className='mob:hidden lap:block font-semibold uppercase ' />
            <div className="flex flex-col gap-5">
                <div className="h-10 flex items-center">
                    <Title text={textPage.subtitle} size="xs" className=' font-semibold uppercase text-[#212121]' />
                </div>
                <p>{textPage.p1}</p>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                    {textPage.li.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="h-[1px] bg-[#EDEDED]"></div>

            <div className="flex flex-col gap-5">
                <div className="h-10 flex items-center">
                    <Title text={textPage.subtitle2} size="xs" className='font-semibold uppercase text-[#212121]' />
                </div>

                <p>{textPage.p2}</p>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                    {textPage.li2.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <p>{textPage.p3}</p>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                    {textPage.li3.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            
        </div>
    )
}