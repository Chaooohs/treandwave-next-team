
import Image from "next/image";
import SingleProductCard from "../../../lib/singleProductCard";

async function getSingleProduct(params) {
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog/by-id/${params}`)
    let products = await res.json();
    return products;
}

export default async function SingleProductPage({params}) {
    let singleProductData = await getSingleProduct(params.id);
    console.log(singleProductData)
    return(
        <div className="w-full">
            <SingleProductCard product={singleProductData}/>

        </div>
    )
}