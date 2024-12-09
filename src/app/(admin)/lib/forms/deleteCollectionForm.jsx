"use client";

import { deleteCollection } from '../actions/collectionActions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import NotificationModal from "../notificationModal";
import { Trash2 } from 'lucide-react';

const initialState = {
  message: '',
};

function DeleteButton() {
    const { pending, error } = useFormStatus();

  return (
    <button 
        disabled={pending}
        type="submit"  
        className="rounded p-2 border border-red-600 w-10">
          {pending ? <Trash2 color='gray'/> : <Trash2 />}
    </button>
  );
}

export function DeleteCollectionForm({ id }) {
  const [state, formAction] = useFormState(deleteCollection, initialState);
  
  return (
    <div className="relative">
      <form action={formAction} className='flex items-center justify-center'>
        <input type="hidden" name="id" value={id} />
        <DeleteButton />
      </form>
      <div className="w-full h-full relative">
        <NotificationModal message={state?.message}/>
      </div>
    </div>
  );
}