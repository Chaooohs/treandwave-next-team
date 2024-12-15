"use client";
import { useState, useEffect } from "react";
import { updateCollection } from '../actions/collectionActions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import NotificationModal from "../notificationModal";
import { PenLine } from 'lucide-react';

const initialState = {
  message: '',
};

function UpdateButton() {
    const { pending, error } = useFormStatus();

  return (
    <button 
        disabled={pending}
        type="submit"  
        className="rounded p-2 border border-[#336CFF]">
          {pending ? 'Редагування...' : 'Редагувати'}
    </button>
  );
}

export function UpdateCollectionForm({ id }) {
  const [state, formAction] = useFormState(updateCollection, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (state?.message === 'Renamed successfully') {
        setIsModalOpen(false);
    }
}, [state]);

  return (
    <div className="">
    <div className="">
      <div className="relative z-10">
        <button
            className="bg-[#336CFF] p-2 rounded text-white"
            onClick={handleOpenModal}
        >
            <PenLine/>
        </button>
      </div>
      {isModalOpen && (
        <div  className="fixed top-0 font-mont h-screen w-screen right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black/40 ">
          <div className="bg-white relative p-10 rounded mob:w-[90%] lap:w-1/2 w-1/2 z-40">
            <button 
                className="absolute top-5 right-5"
                onClick={handleCloseModal}>
                    x
            </button>
            <form action={formAction} className=" flex flex-col gap-2">
              <input type="hidden" name="id" value={id} />
              <input 
                type="text" 
                name="collection" 
                id='collection'
                className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]" 
              />
              <UpdateButton />
            </form>
          </div>
        </div>
      )}
    </div>
    <NotificationModal message={state?.message}/>
    </div>
  );
}