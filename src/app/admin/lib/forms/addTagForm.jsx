"use client";

import { addTag } from "../actions/tagActions";

function SubmitButton() {

    const handleRefresh = () => {
        location.reload();
    };

    return (
        <button 
            onClick={handleRefresh}
            type="submit" 
            className="bg-[#336CFF] p-2 rounded text-white uppercase">
            додати
        </button>
    );
}

export function AddForm() {

  return (
    <form action={addTag} className="flex flex-col gap-2">
      <label htmlFor="tag">Введіть тег</label>
      <input type="text" id="tag" name="tag" required  className="focus:outline-none bg-white ring-0 ring-offset-0 p-3 rounded w-full border-[#BABABA] border-[1px] hover:ring-[#336CFF] hover:border-[#336CFF] focus:ring-[#336CFF] focus:border-[#336CFF]"/>
      <SubmitButton />
    </form>
  );
}