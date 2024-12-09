import AdminTitle from "../../lib/title";
import ProductCard from "../../lib/productcard";
import Link from "next/link";
import Pagination from "../../lib/pagination";

export async function getProducts(limitOnPage, currentPage) {
    const limit = limitOnPage;
    const page = currentPage || 1;
    const totalPages = 1;
    let allProducts = [];


    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog?page=${page}&limit=${limit}`)
    let products = await res.json();
    return products;
}


export default async function ProductPage({searchParams}) {
    console.log(searchParams);
    const limitOnPage = 20;
    const currentPage = Number(searchParams?.page) || 1;
    let products = await getProducts(limitOnPage, currentPage);
    const totalPages = products.totalPages;
    const total = products.total;

    const tableTitle = ['фото', 'назва', 'ціна', 'знижка, %']

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Товари'}/>
            <div className="flex w-full items-start">
                <Link href={'/admin/dashboard/newproduct'}>
                    <button 
                        className="bg-[#336CFF] p-2 rounded text-white uppercase">
                        додати новий товар
                    </button>
                </Link>
                
            </div>
            <div className="w-full uppercase grid grid-flow-col-dense grid-cols-[5fr_0.5fr] gap-2 ">
                <div className="w-full grid grid-flow-col-dense grid-cols-[0.5fr_2.5fr_1fr_1fr] gap-2">
                    {tableTitle.map((items, index) => (
                        <div key={index} className="flex ">{items}</div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                {products.data.map((item, index) => (
                    <div key={index} className="">
                            <ProductCard data={item}/>
                    </div>
                ))}
                

            </div>
            <Pagination totalPages={totalPages} totalProduct={total} limit={limitOnPage} />

        </div>
    )
}