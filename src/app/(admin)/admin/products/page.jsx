import AdminTitle from "../../lib/title";
import ProductCard from "../../lib/productcard";
import Link from "next/link";
import Pagination from "../../lib/pagination";
import Image from "next/image";
import { DeleteProductForm } from "../../lib/forms/deleteProductForm";
import ProductList from "../../lib/productList";


export async function getProducts(limitOnPage, currentPage) {
    const limit = limitOnPage;
    const page = currentPage || 1;

    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog?page=${page}&limit=${limit}`, { cache: 'no-store' })
    let products = await res.json();
    console.log('products', products);
    return products;
}


export default async function ProductPage({searchParams}) {
    const limitOnPage = 20;
    const currentPage = Number(searchParams?.page) || 1;
    const products = await getProducts(limitOnPage, currentPage);
    const totalPages = products.totalPages;
    const total = products.total;

    const tableTitle = ['фото', 'назва', 'ціна', ' %', ''];

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Товари'}/>
            <div className="flex w-full items-start">
                <Link href={'/admin/newproduct'}>
                    <button 
                        className="bg-[#336CFF] p-2 rounded text-white uppercase">
                        додати новий товар
                    </button>
                </Link>
                
            </div>
            <ProductList tableTitle={tableTitle} products={products}/>
            <Pagination totalPages={totalPages} totalProduct={total} limit={limitOnPage} />
        </div>
    )
}