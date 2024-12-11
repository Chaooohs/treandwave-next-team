"use client";

import { deleteCategory } from "../actions/catagoryActions";
import NotificationModal from "../notificationModal";
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { Trash2 } from 'lucide-react';

const initialState = {
  message: '',
};

function DeleteButton() {
  const { pending, error } = useFormStatus();

  return (
    <button 
        type="submit"  
        className="rounded p-2 border border-red-600 text-nowrap hover:bg-blue-50">
        {pending ? <Trash2 color='gray'/> : <Trash2 />}
    </button>
  );
}

export function DeleteCategoryForm({ id, category }) {
  const [state, formAction] = useFormState(deleteCategory, initialState);
  
  
  return (
    <div className="relative">
      <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="category" value={category} />
      <DeleteButton />
    </form>
    <div className="w-full h-full relative">
        <NotificationModal message={state?.message}/>
    </div>
    </div>
  );
}