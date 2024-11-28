"use client";

import { useState } from "react";
import { addCategory } from "../actions/catagoryActions";

function SubmitButton() {
    const handleRefresh = () => {
        location.reload();
    };

    return (
        <button 
            type="submit" 
            className="bg-[#336CFF] p-2 rounded text-white uppercase">
            додати
        </button>
    );
}

export function AddCategoryForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div>
            <button
                className="bg-[#336CFF] p-2 px-3 rounded text-white"
                onClick={handleOpenModal}
            >
                Додати категорію
            </button>
            {isModalOpen && (
                <div className="font-mont h-screen absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/40 ">
                    <div className="bg-white relative p-10 rounded lap:w-1/2 w-1/2">
                        <button 
                            className="absolute top-5 right-5"
                            onClick={handleCloseModal}>
                                x
                        </button>
                        <form action={addCategory} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="category">Введіть нову категорію</label>
                                <input type="text" id="category" name="category" required  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label htmlFor="image">Додайте фото категорії</label>
                                <input type="file" id="image" name="image"/>   
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}