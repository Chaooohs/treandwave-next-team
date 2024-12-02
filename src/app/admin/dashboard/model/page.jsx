'use server'
import AdminTitle from "../../lib/title";
import { AddModelForm } from "../../lib/forms/addModelForm";
import { DeleteForm } from "../../lib/forms/deleteModelForm";
import { getModels } from "../../lib/actions/modelActions";


export default async function ModelPage() {
    let modelsArray = await getModels();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Моделі'}/>
            <div className=" flex flex-col gap-5">
                <AddModelForm/>
                <ul className="flex flex-col gap-2">
                    {modelsArray.reverse().map((model) => (
                    <li key={model.id} className="flex gap-4 justify-between uppercase">
                        <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">{model.name}</p>
                        <DeleteForm id={model.id}/>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}