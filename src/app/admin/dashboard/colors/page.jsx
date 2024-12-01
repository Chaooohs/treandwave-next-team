
import AdminTitle from "../../lib/title";
import { AddColorForm } from "../../lib/forms/addColorForm";
import { getColors } from "../../lib/actions/colorsActions";


export default async function ColorsPage() {
    let colors = await getColors();

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Кольори'}/>
            <div className=" flex flex-col gap-5">
                <AddColorForm />
                <ul className="flex flex-col gap-2">
                    {colors.map((color) => (
                    <li key={color.id} className="flex gap-4 justify-between uppercase">
                        <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">Колір: {color.colorName}</p>
                        <p className="bg-slate-100 p-2 px-3 rounded w-full text-center">HEX: {color.hex}</p>
                        <div className={`w-10 h-full`} style={{backgroundColor: color.hex}}></div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}