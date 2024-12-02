import Link from "next/link";
import { Montserrat} from "next/font/google";
import { cookies } from 'next/headers';
import NotificationModal from '../lib/notificationModal';

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
        {name: 'Товари', link: '/admin/dashboard/products'},
        {name: 'Категорії', link: '/admin/dashboard/category'},
        {name: 'Теги', link: '/admin/dashboard/tags'},
        {name: 'Замовлення', link: '/admin/dashboard/orders'},
        {name: 'Користувачі', link: '/admin/dashboard/users'},
        {name: 'Кольори', link: '/admin/dashboard/colors'},
        {name: 'Моделі', link: '/admin/dashboard/model'},
        {name: 'Колекції', link: '/admin/dashboard/collection'},
    ]
    return (
        <section className={` ${montserrat.className} wrap py-5 relative`}>
            <div className="flex gap-5 border rounded-md border-gray-200 ">
                <nav className="flex flex-col bg-gray-200 w-1/4">
                    {navLinks.map((item, index) => (
                        <div key={index} className="w-full px-5 py-5 border-b border-white">
                            <Link  href={item.link}>
                                {item.name}
                            </Link>

                        </div>
                    ))}
                </nav>
                <div className="flex p-5 w-full">
                    {children}
                </div>

            </div>
        </section>
    )
        
  }