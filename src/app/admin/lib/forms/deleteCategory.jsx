"use client";

import { deleteCategory } from "../actions/catagoryActions";

function DeleteButton() {
    const handleRefresh = () => {
        location.reload();
    }

  return (
    <button 
        onClick={handleRefresh}
        type="submit"  
        className="rounded p-2 border border-red-600 text-nowrap hover:bg-blue-50">
      Видалити категорію
    </button>
  );
}

export function DeleteCategoryForm({ id, category }) {
  
  return (
    <form action={deleteCategory}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="category" value={category} />
      <DeleteButton />
    </form>
  );
}