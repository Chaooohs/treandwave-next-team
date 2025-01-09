import Link from "next/link";
import { Montserrat} from "next/font/google";
import { cookies } from 'next/headers';
import NotificationModal from '../lib/notificationModal';
import NavigationMenu from "../lib/navigation";
import NavigationMobile from "../lib/navigationMobile";

const montserrat = Montserrat({
    subsets: ['cyrillic'],
    display: 'swap',
    variable: '--font-montserrat',
    weight: ['400', '500', '600']
  })

export default function AdminLayout({ children }) {
    const cookieStore = cookies();
    const actionNotification = cookieStore.get('actionNotification')?.value;


    const navLinks = [
        {name: 'Товари', link: '/admin/products'},
        {name: 'Категорії', link: '/admin/category'},
        {name: 'Теги', link: '/admin/tags'},
        {name: 'Кольори', link: '/admin/colors'},
        {name: 'Моделі', link: '/admin/model'},
        {name: 'Колекції', link: '/admin/collection'},
        {name: 'Замовлення', link: '/admin/orders'},
        {name: 'Користувачі', link: '/admin/users'}
    ]
    return (
        <section className={` ${montserrat.className} wrap py-5 relative min-h-[40vh]`}>
            <div className="flex relative gap-5 border rounded-md border-gray-200 ">
                <NavigationMenu navLinks={navLinks}/>
                
                <div className="flex p-5 w-full">
                    {children}
                </div>
                <NavigationMobile navLinks={navLinks}/>
            </div>
        </section>
    )
        
  }