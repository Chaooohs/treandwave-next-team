import Image from "next/image";

export default function ProductCard({data}) {
    console.log(data);
    return(
        <div className="w-full grid grid-flow-col-dense grid-cols-[0.5fr_2.5fr_1fr_1fr] gap-2 border border-slate-100 rounded justify-between items-center">
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
    )
}