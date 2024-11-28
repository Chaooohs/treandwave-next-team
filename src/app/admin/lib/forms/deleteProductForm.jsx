"use client";
import { Trash2 } from 'lucide-react';
import { deleteProduct } from "../actions/newProduct";

function DeleteButton() {
    const handleRefresh = () => {
        location.reload();
    }

  return (
    <button 
        type="submit"  
        className="rounded p-1 border border-red-600">
            <Trash2 size={'20px'}/>
    </button>
  );
}

export function DeleteProductForm({ id }) {
  
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
}