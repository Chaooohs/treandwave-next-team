"use client";

import AddImages from "../actions/newProduct";
import { useState, useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom';
import NotificationModal from "../notificationModal";

const initialState = {
  message: '',
};


export function AddImageForm({color, index, handleImageAdd}) {
  console.log(color, index);
  const [newImageIds, setNewIamgeIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useFormState(AddImages, initialState);
  const { pending, error } = useFormStatus();
  console.log('state', state);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (state?.message === 'Картинки додались успішно') {
        setIsModalOpen(false);
    }
  }, [state]);

  useEffect(() => {
    if (state?.newImageData) {
      console.log('useEffect ');
      const {colorId, uploadedImages} = state.newImageData;
      setNewIamgeIds(state.newImageData);
      handleImageAdd(colorId, uploadedImages);
    };
    console.log('newImageIds', newImageIds);
  }, [state.newImageData]);



  return (
    <div className="">
      <button
        type="button"
        className="bg-[#336CFF] p-2 px-3 rounded text-white"
        onClick={handleOpenModal}
      >
        Додати фото
      </button>
      {isModalOpen && (
        <div className="fixed top-0 font-mont h-screen w-screen right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/40 ">
          <div className="bg-white relative p-10 rounded mob:w-[80%] lap:w-1/2 w-1/2 ">
            <button 
              className="absolute top-5 right-5"
              onClick={handleCloseModal}
            >
                x
            </button>
            <div className="flex flex-col gap-2">
              <label htmlFor={`image`}>Додати фото</label>
              <input
                type="file"
                id={`image`}
                name={`image_${index}`}
                multiple
                className=" w-full p-3 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <button 
              disabled={pending}
              formAction={formAction}
              className="bg-[#336CFF] mt-5 p-2 rounded text-white uppercase">
              {pending ? 'Додавання...' : 'Додати фото'}
           </button>
          </div>
        </div>
      )}
  <div className="w-full h-full relative">
      <NotificationModal message={state?.message}/>
  </div>
  </div>
  )
}