'use server'
import AdminTitle from "../../lib/title";
import { AddCollectionForm } from "../../lib/forms/addCollectionForm";
import { DeleteCollectionForm } from "../../lib/forms/deleteCollectionForm";
import { getCollection } from "../../lib/actions/collectionActions";


export default async function CollectionPage() {
    let collectionArray = await getCollection();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Теги'}/>
            <div className=" flex flex-col gap-5">
                <AddCollectionForm />
                <ul className="flex flex-col gap-2">
                    {collectionArray.reverse().map((collection) => (
                    <li key={collection.id} className="flex gap-4 justify-between uppercase">
                        <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">{collection.name}</p>
                        <DeleteCollectionForm id={collection.id} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}