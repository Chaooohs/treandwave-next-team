"use client";

import { deleteTag } from "../actions/tagActions";
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
        className="rounded p-2 border border-red-600">
          {pending ? <Trash2 color='gray'/> : <Trash2 />}
    </button>
  );
}

export function DeleteForm({ id, tag }) {
  const [state, formAction] = useFormState(deleteTag, initialState);
  
  return (
    <div className="relative">
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="tag" value={tag} />
        <DeleteButton />
      </form>
      <div className="w-full h-full relative">
        <NotificationModal message={state?.message}/>
      </div>
    </div>
  );
}