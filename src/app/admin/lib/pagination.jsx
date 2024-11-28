'use client';

import { ChevronLeft, ChevronRight} from 'lucide-react';
import Link from 'next/link';
import { createUrl } from './utils/createUrl';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({ totalPages, limit }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page'));

    const getPages = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i<= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(1,2,3,4,5, '...', totalPages);
            } else if (currentPage > totalPages - 4) {
                pages.push(1, "...", 
                    totalPages - 4, 
                    totalPages - 3, 
                    totalPages - 2, 
                    totalPages - 1, 
                    totalPages );
            } else {
                pages.push(1, "...",
                    currentPage - 1,
                    currentPage,
                    currentPage + 1, 
                    "...", 
                    totalPages
                );
            }
            console.log('pages',pages);
            return pages;
            
        }
    }

   return (
      <>
         <div className='inline-flex'>
            <div className='flex gap-2'>
               {getPages().map((page, index) => {
                const pageSearchParams = new URLSearchParams(searchParams.toString());
                pageSearchParams.set('page', page);

                const pageURL = createUrl(pathname, pageSearchParams);

                return (
                    <Link 
                        key={index}
                        href={pageURL}
                    >
                        {page}
                    </Link>
                )
                })}
            </div>
         </div>
      </>
   );
}