"use client";
import { Trash2 } from 'lucide-react';
import { deleteProduct } from "../actions/newProduct";
import NotificationModal from "../notificationModal";
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom'

const initialState = {
    message: '',
  };

function DeleteButton() {
  const { pending, error } = useFormStatus();

  return (
    <button 
        disabled={pending}
        type="submit"  
        className={`rounded p-1 border ${pending ? 'border-red-200' : 'border-red-600'}`}>
            <Trash2 size={'20px'}/>
    </button>
  );
}

export function DeleteProductForm({ id }) {
  const [state, formAction] = useFormState(deleteProduct, initialState);
  
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <DeleteButton />
      </form>
      <div className="w-full h-full relative">
          <NotificationModal message={state?.message}/>
      </div>
    </div>

  );
}