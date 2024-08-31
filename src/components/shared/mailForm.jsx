'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Title } from "../ui";
import { Input } from '../ui/input.jsx';

import { PopUp } from "../ui/popUp";


export default function MailForm() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)

  const pathname = usePathname();

  const showMailForm = pathname === '/' || pathname === '/colections' || pathname === '/catalog' || pathname === '/sale';

  if (!showMailForm) return null;


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

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
  }


  return (
    <div className="wrap">
      <div className="content">
        <div className="flex items-center justify-around ">
          <div>
            <Title text={'Підписка на розсилку'} size="lg" className={'font-mul uppercase font-extrabold'} />
            <p className="font-mont text-base font-normal">
              Підпишись та дізнавайся першим про акції та знижки
            </p>
          </div>
          <div className="w-4/12">
            <div>
              <Input
                type="email"
                placeholder='Введіть вашу електронну пошту'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`font-mont font-medium border-[1px] ${error ? 'border-[#C50018] text-[#C50018]' : 'border-stone-300 text-[#121212]'} hover:border-[#0047FF] focus:border-[#0047FF] focus:text-[#121212] focus-visible:ring-0`}
              />
              {error && <p className="text-xs font-mont font-medium text-red-500 mt-1 mb-6">{error}</p>}
              {!error &&
                <p className="text-xs font-mont font-medium text-[#939393] mt-1 mb-6">
                  Ми поважаємо вашу конфіденційність.
                </p>
              }
            </div>
            <PopUp onClick={handleSubmit} isValid={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  )
}