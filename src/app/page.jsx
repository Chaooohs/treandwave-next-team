'use client'
import { Baner, BestSaler, Categories, NewColection, YouSection } from "@/components/shared";
import { useGetCategoryListQuery, useGetGoodsQuery } from "@/redux/api/goodsApi";

export default function Home() {

  const { newList } = useGetGoodsQuery('/catalog?page=1&limit=20&isNew=true',
    {
      selectFromResult: ({ data, }) => ({
        newList: data?.products,
      }),
    }
  )

  const { bestsellers } = useGetGoodsQuery('/catalog?page=1&limit=20&bestseller=true',
    {
      selectFromResult: ({ data, }) => ({
        bestsellers: data?.products,
      }),
    }
  )

  const { data: catalogList } = useGetCategoryListQuery("/category");

  return (
    <main>
      <Baner />
      <NewColection newList={newList} />
      <BestSaler bestsellers={bestsellers} />
      <Categories catalogList={catalogList} />
      <YouSection />
    </main>
  );
}
