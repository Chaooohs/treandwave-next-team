'use client'
import { usePathname } from "next/navigation";
import CardList from "@/components/shared/CardList/CardList";

export default function Page() {
  const pathname = usePathname()

    const title = 'Sale';

    return(
        <div className="lg:px-24 px-5 w-full">
            <CardList title={title} pathname={pathname}/>
            
        </div>
    )
}