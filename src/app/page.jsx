'use client'
import { Baner, BestSaler, Categories, NewColection, YouSection } from "@/components/shared";
import { useGetGoodsQuery } from "@/redux/api/goodsApi";

export default function Home() {

  const { bestsellers } = useGetGoodsQuery('/catalog?page=1&limit=20&bestseller=true', 
    {
      selectFromResult: ({ data, }) => ({
        bestsellers: data?.products,
      }),
    }
  )

  return (
    <main>
      <Baner />
      <NewColection />
      <BestSaler bestsellers={bestsellers} />
      <Categories />
      <YouSection />
    </main>
  );
}
