"use client";

import { addCollection } from "../actions/collectionActions";
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
            disabled={pending}
            type="submit" 
            className="bg-[#336CFF] p-2 rounded text-white uppercase">
            {pending ? 'Додавання...' : 'Додати коллекцію'}
        </button>
    );
}


export function AddCollectionForm() {

  const [state, formAction] = useFormState(addCollection, initialState);

  return (
    <div className="relaive">
      <form action={formAction} className="flex flex-col gap-2">
        <label htmlFor="collection">Введіть назву колекції</label>
        <input type="text" id="collection" name="collection" required  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"/>
        <SubmitButton />
      </form>
      <div className="w-full h-full relative">
          <NotificationModal message={state?.message}/>
      </div>
    </div>
  );
}