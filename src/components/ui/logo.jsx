import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo({className}) {
    return(
        <div>
            <Link href={'/'}>
                <div className={cn("font-adi font-semibold uppercase text-5xl", className)}>Logo</div>
            </Link>
        </div>
    )
}