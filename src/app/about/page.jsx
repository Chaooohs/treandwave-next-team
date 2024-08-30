import { Title } from "@/components/ui";
import Image from "next/image";
import pageImage from '/public/image/jpg/image.png';

export default function Page() {
    const textPage = {
        title: 'Про нас',
        text: [
            'Ми — команда, яка вірить у силу українського виробництва та стиль, що поєднує якість, комфорт і сучасний дизайн. Від кожного шва до останньої деталі — наш одяг створений з думкою про вас.',
            'Всі наші речі виготовляються виключно в Україні. Ми співпрацюємо з місцевими майстрами та використовуємо тільки високоякісні матеріали, щоб ви могли насолоджуватися зручним і стильним одягом у будь-якій ситуації.',
            'Ми прагнемо, щоб кожен наш виріб підкреслював вашу унікальність і підтримував українське виробництво. Дякуємо, що обираєте нас!'
        ],
        subtitle: 'Наш асортимент',
        subtext: 'Ми пропонуємо широкий вибір одягу, який задовольнить будь-які потреби та смаки. У нашому асортименті ви знайдете:',
        textLi: [
            'Сукні для будь-якої події — від повсякденних до вечірніх образів;',
            'Футболки, топи, лонгсліви та кофти для створення стильних і комфортних образів;',
            'Шорти та спідниці для легких і невимушених літніх образів;',
            'Штани та костюми, що додадуть елегантності та впевненості;',
            'Верхній одяг — від легких курток до теплих пальт, що захистять вас від негоди.',
        ],
        subtext2: 'Наш асортимент постійно оновлюється, тому ви завжди знайдете щось нове та цікаве. Обирайте одяг, який підкреслить ваш стиль, і підтримуйте українське виробництво!'
    }
    return(
        <div className="border-l-[1px] font-mont border-[#EDEDED] w-full px-10 flex flex-col gap-5">
            <Title text={textPage.title} size="lg" className=' font-semibold uppercase ' />
            <div>
                <Image src={pageImage} alt='trend wave picture'/>
            </div>
            <div className="flex flex-col gap-3">
                {textPage.text.map((item, index) => (
                    <p key={index} className="text-[#4D4D4D] font-mont font-medium text-sm">
                        {item}
                    </p>
                ))}
            </div>
            <div className="h-[1px] w-full bg-[#EDEDED]"></div>
            <div className="flex flex-col gap-5">
                <Title text={textPage.subtitle} size="xs" className='font-semibold uppercase ' />
                <div className=" flex flex-col text-[#4D4D4D] gap-3 font-mont font-medium text-sm">
                    <p>{textPage.subtext}</p>
                    <ul className=" list-disc list-inside flex flex-col gap-3">
                        {textPage.textLi.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p>{textPage.subtext2}</p>
                </div>
            </div>
        </div>
    )
}