'use server'
import AdminTitle from "../../lib/title";
import { AddForm } from "../../lib/forms/addTagForm";
import { DeleteForm } from "../../lib/forms/deleteTagForm";
import { getTags } from "../../lib/actions/tagActions";


export default async function TagsPage() {
    let tagsArray = await getTags();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Теги'}/>
            <div className=" flex flex-col gap-5">
                <AddForm />
                <ul className="flex flex-col gap-2">
                    {tagsArray.reverse().map((tag) => (
                    <li key={tag.id} className="flex gap-4 justify-between uppercase">
                        <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">{tag.name}</p>
                        <DeleteForm id={tag.id} tag={tag.name} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}