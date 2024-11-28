"use client";

import { deleteSubCategory } from "../actions/catagoryActions";

function DeleteButton() {
    const handleRefresh = () => {
        location.reload();
    }

  return (
    <button 
        onClick={handleRefresh}
        type="submit"  
        className="rounded p-1 border border-red-600 text-nowrap hover:bg-blue-50">
      Видалити підкатегорію
    </button>
  );
}

export function DeleteSubCategoryForm({ id, subcategory }) {
    console.log('dele', subcategory)
  
  return (
    <form action={deleteSubCategory}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="subcategory" value={subcategory} />
      <DeleteButton />
    </form>
  );
}