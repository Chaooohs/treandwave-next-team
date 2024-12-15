"use client";

import { useState, useEffect } from "react";
import { addSubCategory } from "../actions/catagoryActions";
import NotificationModal from "../notificationModal";
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom'

const initialState = {
    message: '',
  };

function SubmitButton() {
    const { pending, error } = useFormStatus();

    return (
        <button 
            type="submit" 
            className="bg-[#336CFF] p-2 rounded text-white uppercase">
            {pending ? 'Додавання...' : 'Додати підкатегорію'}
        </button>
    );
}

export function AddSubCategoryForm({categories}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [state, formAction] = useFormState(addSubCategory, initialState);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (state?.message === 'Subcategory added successfully') {
            setIsModalOpen(false);
        }
    }, [state]);

    return (
        <div className="">
            <button
                className="bg-[#336CFF] p-2 px-3 rounded text-white"
                onClick={handleOpenModal}
            >
                Додати підкатегорію
            </button>
            {isModalOpen && (
                <div className="font-mont h-screen fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/40 ">
                    <div className="bg-white relative p-10 rounded mob:w-[80%] lap:w-1/2 w-1/2">
                        <button 
                            className="absolute top-5 right-5"
                            onClick={handleCloseModal}>
                                x
                        </button>
                        <form action={formAction} className="flex flex-col gap-2">
                            <label htmlFor="category">Оберіть категорію</label>
                            <select name="category" id="category" className="p-2">
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            <div></div>
                            <label htmlFor="subcategory">Введіть нову підкатегорію</label>
                            <input type="text" id="subcategory" name="subcategory" required  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"/>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            )}
            <div className="w-full h-full relative">
                <NotificationModal message={state?.message}/>
            </div>
        </div>
    );
}