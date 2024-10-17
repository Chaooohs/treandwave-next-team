import { Card } from "./card";
import { useDispatch, useSelector } from "react-redux";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";

export default function CheckoutConfirmationAlsoLikeBlock() {

    
  const dispatch = useDispatch();
  const { products} = useGetGoodsQuery(`/catalog?page=1&limit=8`,
    {
      selectFromResult: ({ data }) => ({
        products: data?.products
      }),
    },
  )
    return(
        <div className="font-mont font-semibold flex flex-col w-full gap-6 py-8">
            <h2 className="uppercase text-2xl">Вам Може сподобатися</h2>
            <div className="grid grid-cols-4 gap-5 lap:grid-cols-3 mob:grid-cols-2">
                {
                
                    Array.isArray(products) &&
                    products.map((el) => {
                    return (
                        <div key={el.id} className="relative">
                         <Card el={el}/>
                        </div>
                    )
                    })
                }
            </div>

        </div>
    )
}