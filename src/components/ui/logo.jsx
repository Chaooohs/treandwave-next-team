import { cn } from "@/lib/utils"

export default function Logo({className}) {
    return(
        <div>
            <div className={cn("font-adi font-normal uppercase text-4xl", className)}>Logo</div>
        </div>
    )
}