
import Image from "next/image";
import SingleProductCard from "../../../lib/singleProductCard";
import { UpdateProductForm } from "@/app/(admin)/lib/forms/updateProductForm";
import { getColors, getTags, getModel, getCategories, getSizes, getCollection } from "@/app/(admin)/lib/actions/newProduct";

async function getSingleProduct(params) {
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog/by-id/${params}`, { cache: 'no-store' })
    let products = await res.json();
    return products;
}

export default async function SingleProductPage({params}) {
    let singleProductData = await getSingleProduct(params.id);
    const colorsList = await getColors();
    const tags = await getTags();
    const models = await getModel();
    const categories = await getCategories();
    const sizes = await getSizes();
    const collection = await getCollection();

    // console.log('singleProductData',singleProductData);
    return(
        <div className="w-full">
            {/* <SingleProductCard product={singleProductData}/>  */}
            <UpdateProductForm 
                data={singleProductData}
                colorsList={colorsList}
                tags={tags}
                models={models}
                categories={categories}
                sizes={sizes}
                collection={collection}
            />
        </div>
    )
}