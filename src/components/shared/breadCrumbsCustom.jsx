

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { usePathname } from "next/navigation";
// import Link from 'next/link';


export function BreadcrumbCustom({title}) {


  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className=' text-sm capitalize'>головна</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          /
        </BreadcrumbSeparator>
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          /
        </BreadcrumbSeparator> */}
        <BreadcrumbItem>
          <BreadcrumbPage className=' text-sm capitalize'>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
