import AboutNavigation from "@/components/shared/aboutNvigation";
import { Button } from "@/components/ui";
import { LogOut } from 'lucide-react';

 function LogOutButton() {
    return(
        <div className="group flex gap-2 items-center text-[#121212] ">
            <LogOut  className=" rotate-180 group-hover:text-[#262626] group-hover:stroke-gray-500"/>
            <Button 
                variant='aboutMenuBut'
                className={`p-0 text-base mob:text-sm group-hover:text-gray-500`}
                >
                    Вийти з кабінету
            </Button>
        </div>
    )
}

export default function ProfileLayout({children}) {
    
    return(
        <div className="wrap w-full flex mob:flex-col lap:flex-col  gap-10 py-8 ">
            <nav className="w-1/3 border-r-[1px] border-[#EDEDED] mob:border-0 lap:border-0 flex flex-col gap-4">
                <AboutNavigation />
                <div className="block mob:hidden lap:hidden">
                    <LogOutButton/>
                </div>
            </nav>
            <div className="w-full">
                {children}
            </div>
            <div className="hidden mob:block lap:block">
                <LogOutButton/>
            </div>
            
        </div>
    )
}