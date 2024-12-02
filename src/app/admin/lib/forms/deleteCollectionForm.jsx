"use client";

import { deleteCollection } from '../actions/collectionActions';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import NotificationModal from "../notificationModal";

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
          {pending ? 'Видалення...' : 'Видалити'}
    </button>
  );
}

export function DeleteCollectionForm({ id }) {
  const [state, formAction] = useFormState(deleteCollection, initialState);
  
  return (
    <div className="relative">
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