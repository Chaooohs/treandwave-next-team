import Image from "next/image";
import { DeleteProductForm } from "./forms/deleteProductForm";
import Link from "next/link";

export default function ProductCard({data}) {

    return(
        <div className="grid gap-2 items-center grid-cols-[5fr_0.5fr]">
            <Link href={`/admin/dashboard/products/${data.id}`} className="w-full">
                <div className="w-full grid grid-flow-col-dense grid-cols-[0.5fr_2.5fr_1fr_1fr] gap-2 border border-slate-100 rounded justify-between items-center pr-2">
                    <div className="h-20 ">
                        <Image src={data.colors[0]?.images[0]?.imageUrl} width={100} height={100} alt="image"
                        className="h-full object-contain object-left"/>
                    </div>
                    <div>
                        <h3 className=" capitalize">{data.title}</h3>
                    </div>
                    <div>
                        <h3>{data.price}</h3>
                    </div>
                    <div>
                        <h3>{data.discountPercentage}</h3>
                    </div>
                </div>
            </Link>
            <div>
                <DeleteProductForm id={data.id}/>
            </div>
        </div>
        
    )
}