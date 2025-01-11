'use client';
import Image from "next/image";
import { DeleteProductForm } from "./forms/deleteProductForm";
import { useRouter } from "next/navigation";

export default function ProductList({tableTitle, products}) {
    const router = useRouter();

    return(
        <div className="w-full shadow-md rounded-lg overflow-x-auto">
                <table className="w-full text-sm text-left table-auto ">
                    <thead className="text-xs text-center text-gray-700 uppercase bg-blue-50 ">
                        <tr >
                            {tableTitle.map((title, index) => (
                                <th key={index} className=" py-3">{title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((item, index) => (
                            <tr key={index} className="border-b  relative cursor-pointer"
                                
                            >
                                <td className="mob:w-16" onClick={() => router.push(`/admin/products/${item.id}`)}>
                                    <div className="h-20 w-full">
                                        <Image src={item.colors[0]?.images[0]?.imageUrl} width={100} height={100} alt="image"
                                        className="h-full  object-cover object-left"/>
                                    </div>
                                </td>
                                <td className="text-wrap truncate" onClick={() => router.push(`/admin/products/${item.id}`)}>{item.title}</td>
                                <td className="pl-3" onClick={() => router.push(`/admin/products/${item.id}`)}>{item.price}</td>
                                <td className="pl-3" onClick={() => router.push(`/admin/products/${item.id}`)}>{item.discountPercentage}</td>
                                <td className="px-3" >
                                    <DeleteProductForm id={item.id}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}