'use client'
import CardList from "@/components/shared/CardList/CardList";


// const fetchData = async () => {
//   let res = await fetch('https://dummyjson.com/products', {
//     cache: 'force-cache',
//     next: {
//       revalidate: 3600
//     }
//   })
//   const product = await res.json()
//   return product
// }


export default function Page() {

  const title = 'Каталог';
  const tagsArr = ['брюки', 'спідниця', 'жакети', 'футболки', 'сукні']


  return (
    <main className="wrap">
      <CardList
        title={title}
        tags={tagsArr}
      />
    </main>
  )
}