'use server'
import AdminTitle from "../../lib/title";
import ProductCard from "../../lib/productcard";
import Link from "next/link";
import { cookies } from 'next/headers';
import { AddForm } from "../../lib/addTagForm";
import { DeleteForm } from "../../lib/deleteTagForm";
import { getTags } from "../../lib/actions/auth";


export default async function TagsPage() {
    let tagsArray = await getTags();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Теги'}/>
            <div className=" flex flex-col gap-5">
                <AddForm />
                <ul className="flex flex-col gap-2">
                    {tagsArray.map((tag) => (
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