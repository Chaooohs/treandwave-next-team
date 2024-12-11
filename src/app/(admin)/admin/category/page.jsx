import AdminTitle from "../../lib/title";
import { getCategories } from "../../lib/actions/catagoryActions";
import { AddCategoryForm } from "../../lib/forms/addCategoryForm";
import { DeleteCategoryForm } from "../../lib/forms/deleteCategory";
import { DeleteSubCategoryForm } from "../../lib/forms/deleteSubCategoryForm";
import { AddSubCategoryForm } from "../../lib/forms/addSubCategory";

export default async function CategoryPage() {
    const categories = await getCategories();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Категорії'}/>
            <div className="w-full flex flex-col gap-5">
                <div className=" flex gap-5">
                    <AddCategoryForm />
                    <AddSubCategoryForm categories={categories}/>
                </div>
                <ul className="w-full flex flex-col gap-5">
                    {categories.map((category) => (
                    <li key={category.id} className="w-full flex gap-5 justify-between uppercase border-l rounded border-slate-100 ">
                        <span className="flex flex-col w-full gap-2">
                            <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">{category.name}</p>
                            {category.subCategories.length > 0 && 
                            (   
                                <ul className="flex flex-col gap-2 list-disc list-inside pl-5 w-full">
                                {category.subCategories.map((subcategory) => (
                                    <li key={subcategory.id} className="text-sm flex gap-5 justify-start items-center w-full">
                                        <p className="w-full">{subcategory.name}</p>
                                        <DeleteSubCategoryForm id={subcategory.id} subcategory={subcategory.name}/>
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </span>
                        <DeleteCategoryForm id={category.id} category={category.name} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}