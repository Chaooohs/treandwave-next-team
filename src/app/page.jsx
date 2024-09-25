'use client'
import { useGetGoodsQuery } from "@/redux/api/goodsApi";
import { Baner, BestSaler, Categories, NewColection, YouSection } from "@/components/shared";

export default function Home() {

  const { data: goods } = useGetGoodsQuery('/product', {
    // selectFromResult: ({ data }) => ({
    //   goods: data?.goods,
    // }),
  })
  

  return (
    <main>
      <Baner />
      <NewColection products={goods} />
      <BestSaler products={goods} />
      <Categories />
      <YouSection />
    </main>
  );
}
