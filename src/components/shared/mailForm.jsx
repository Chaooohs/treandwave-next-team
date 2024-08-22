'use client';
import { useState } from 'react';
import {  Title, Button } from "../ui";
import { Input } from '../ui/input.jsx';
import { usePathname } from 'next/navigation';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog.jsx';
import { PopUp } from "../ui/popUp";


export default function MailForm() {
    const pathname = usePathname();

    const showMailForm = pathname === '/' || pathname === '/colections' || pathname === '/catalog' || pathname === '/catalog';

    if (!showMailForm) return null;

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)



    const handleSubmit = () => {
        if (!email) {
            setError('Будь ласка, введіть електронну пошту.');
            setIsModalOpen(false);

        } else if (!validateEmail(email)) {
            setError('Будь ласка, введіть дійсну електронну пошту.');
            setIsModalOpen(false);

        } else {
            setError('');
            setIsModalOpen(true);

            // Здесь можно добавить код для отправки email
            console.log('Email отправлен:', email);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const closeModal = () => setIsModalOpen(false);




    return(
        <div className="px-5 md:px-24 flex">
            <div className="grid md:grid-cols-2 py-10 gap-5 md:gap-20 justify-center items-center">
                <div>
                    <Title text={'Підписка на розсилку'} size="lg" className={'font-mul uppercase font-extrabold'}/>
                    <p className="font-mont text-base font-normal">
                        Підпишись та дізнавайся першим про акції та знижки
                    </p>
                </div>
                <div className=" relative flex flex-col gap-5 z-10">
                    <div className="flex flex-col gap-2">
                        <Input 
                            type="email" 
                            placeholder='Введіть вашу електронну пошту' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='font-mont font-medium '
                        />
                        
                        {error && <p className="text-xs font-mont font-medium text-red-500">{error}</p>}

                        <p className="text-xs font-mont font-medium text-[#939393]">
                            Ми поважаємо вашу конфіденційність.
                        </p>
                    </div>
                    <PopUp onClick={handleSubmit} isValid={isModalOpen} onClose={closeModal}/>
                    
                </div>
            </div>
        </div>
    )
}