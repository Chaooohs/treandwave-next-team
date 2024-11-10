import AdminTitle from "../../lib/title";
import ProductCard from "../../lib/productcard";
import Link from "next/link";

async function getProducts(params) {
    let res = await fetch (`https://clothing-store-api-lh6l.onrender.com/api/v1/catalog?page=1&limit=20`)
    let products = await res.json();
    return products;
}

// https://clothing-store-api-lh6l.onrender.com/api/v1/catalog?page=1&limit=20
export default async function ProductPage() {
    let products = await getProducts();
    const tableTitle = ['фото', 'назва', 'ціна', 'знижка, %']

    return(
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <AdminTitle text={'Товари'}/>
            <div className="w-full uppercase grid grid-flow-col-dense grid-cols-[0.5fr_2.5fr_1fr_1fr] gap-2 ">
                {tableTitle.map((items, index) => (
                    <div key={index} className="flex ">{items}</div>
                ))}
            </div>
            <div className="w-full flex flex-col gap-3">
                {products.data.map((item, index) => (
                    <div key={index} className="">
                        <Link href={`/admin/dashboard/products/${item.id}`}>
                            <ProductCard data={item}/>
                        </Link>
                    </div>
                ))}
                

            </div>

        </div>
    )
}