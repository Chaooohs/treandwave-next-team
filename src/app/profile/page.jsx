'use client';
import { useState } from "react";
import { Title } from "@/components/ui";
import { Eye, EyeOff } from 'lucide-react';
import { BranchDelivery } from "../checkout/(deliveryAndPayment)/delivery/components/branchDelivery";
import { PostomatDelivery } from "../checkout/(deliveryAndPayment)/delivery/components/postomatDelivery";
import { CourierDelivery } from "../checkout/(deliveryAndPayment)/delivery/components/courierDelivery";

function InputField({ id, type, name, value, onChange, label }) {

    return (
      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"
          

        />
        {label && (
          <label htmlFor={id} className={`absolute left-3 bg-white px-1 text-[#BABABA] ${value ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
            {label}
          </label>
        )}
      </div>
    );
  }

  function InputFieldPassword({ id, name, value, onChange, label, showPassword, toggledPasswordVisibility }) {
    return (
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          className="border p-3 rounded w-full border-[#BABABA]"

        />
        
          <label htmlFor={id} className={`absolute left-3 bg-white px-1 text-[#BABABA] ${value ? '-top-3' : 'top-1/2 -translate-y-1/2'}`}>
            {label}
          </label>
        
        <button 
            type="button"
            onClick={toggledPasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2"
        >
            {showPassword ? <Eye/> : <EyeOff/>}

        </button>
 
      </div>
    );
  }
  
  

export default function Page() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        department: '',
        street: '',
        building: '',
        apartment: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

      const [showPassword, setShowPassword] = useState(false);
      const [deliveryInfo, setDeliveryInfo] = useState({});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const toggledPasswordVisibility = () => {
        setShowPassword((prev) => !prev)
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
        console.log(formData);
        console.log(deliveryInfo);
      };
    
    
    return(
        <div className="flex flex-col gap-12 text-[#121212]">
            <section className="flex flex-col gap-8">
                <div>
                    <Title className='font-mont uppercase text-3xl mob:text-2xl lap:text-2xl font-semibold' text={'Особисті дані'}/>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField 
                        id={'name'} 
                        type={'text'} 
                        name={'firstName'} 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        label={`Ім'я`}
                    />
                    <InputField 
                        id={'lastName'} 
                        type={'text'} 
                        name={'lastName'} 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        label={`Прізвище`}
                    />
                    <InputField 
                        id={'email'} 
                        type={'email'} 
                        name={'email'} 
                        value={formData.email} 
                        onChange={handleChange} 
                        label={`Email`}
                    />
                    <InputField 
                        id={'phone'} 
                        type={'tel'} 
                        name={'phone'} 
                        value={formData.phone} 
                        onChange={handleChange} 
                        label={`Телефон`}
                    />

                    <button
                        type="submit"
                        className="w-[336px] mob:w-full uppercase bg-[#B0C6FF] text-white p-3 rounded hover:bg-[#0047FF]"
                    >
                        Зберегти
                    </button>
                </form>
            </section>

             {/* Адреса доставки */}
            <section className="flex flex-col gap-8">
                <h2 className="uppercase text-3xl mob:text-2xl lap:text-2xl font-semibold">Адреса доставки</h2>

                {/* Нова Пошта - Відділення */}
                {/* <h3 className="text-base font-semibold uppercase">Нова Пошта - Відділення</h3> */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
                    {/* <InputField 
                        id={'city'} 
                        type={'text'} 
                        name={'city'} 
                        value={formData.city} 
                        onChange={handleChange} 
                        label={`Місто`}
                    />
                    <InputField 
                        id={'department'} 
                        type={'text'} 
                        name={'department'} 
                        value={formData.department} 
                        onChange={handleChange} 
                        label={`Відділення`}
                    /> */}
                    <BranchDelivery setDeliveryInfo={setDeliveryInfo}/>

                    <button
                        type="submit"
                        className="w-[336px] mob:w-full uppercase bg-[#B0C6FF] text-white p-3 rounded hover:bg-[#0047FF]"
                    >
                        Зберегти
                    </button>
                </form>

                {/* Нова Пошта - Поштомат */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
                    <PostomatDelivery setDeliveryInfo={setDeliveryInfo}/>
                    <button
                        type="submit"
                        className="w-[336px] mob:w-full uppercase bg-[#B0C6FF] text-white p-3 rounded hover:bg-[#0047FF]"
                    >
                        Зберегти
                    </button>
                </form>

                {/* Нова Пошта - Курьєр */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
                    <CourierDelivery setDeliveryInfo={setDeliveryInfo}/>
                    <button
                        type="submit"
                        className="w-[336px] mob:w-full uppercase bg-[#B0C6FF] text-white p-3 rounded hover:bg-[#0047FF]"
                    >
                        Зберегти
                    </button>
                </form>
            </section>

              {/* Оновити пароль */}
            <section className="flex flex-col gap-8">
                <h2 className="uppercase text-3xl mob:text-2xl lap:text-2xl font-semibold">Оновити пароль</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <InputFieldPassword
                            id={'currentPassword'}
                            label={'Поточний пароль'}
                            name={'currentPassword'}
                            value={formData.currentPassword} 
                            onChange={handleChange}
                            toggledPasswordVisibility={toggledPasswordVisibility}
                            showPassword={showPassword}

                        />
                         <InputFieldPassword 
                            id={'newPassword'} 
                            type={'password'} 
                            name={'newPassword'} 
                            value={formData.newPassword} 
                            onChange={handleChange} 
                            label={`Новий пароль`}
                            toggledPasswordVisibility={toggledPasswordVisibility}
                            showPassword={showPassword}
                        />
                        <InputFieldPassword 
                            id={'confirmPassword'} 
                            type={'password'} 
                            name={'confirmPassword'} 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            label={`Повторіть новий пароль`}
                            toggledPasswordVisibility={toggledPasswordVisibility}
                            showPassword={showPassword}
                        />

                    </div>
                    <button
                            type="submit"
                            className="w-[336px] mob:w-full uppercase bg-[#B0C6FF] text-white p-3 rounded hover:bg-[#0047FF]"
                        >
                            Зберегти
                    </button>
                </form>
            </section>
        </div>
    )
}