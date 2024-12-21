"use client";

import { deleteSubCategory } from "../actions/catagoryActions";
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
        className="rounded p-1 border border-red-600 text-nowrap hover:bg-blue-50">
        {pending ? <Trash2 color='gray'/> : <Trash2 />}
    </button>
  );
}

export function DeleteSubCategoryForm({ id, subcategory }) {
  const [state, formAction] = useFormState(deleteSubCategory, initialState);
  
  return (
    <div className="relative">
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="subcategory" value={subcategory} />
        <DeleteButton />
      </form>
      <div className="w-full h-full relative">
          <NotificationModal message={state?.message}/>
      </div>
    </div>
    
  );
}