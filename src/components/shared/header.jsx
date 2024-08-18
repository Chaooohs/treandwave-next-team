import Link from "next/link"
import { Button } from "../ui"


export const Header = () => {
  return (
    <header>
      <div className="flex align-center h-20 border-b items-center gap-x-8 px-8 box-border">
        <Link href='/'>
          <Button variant='outline' size='lg'>
            main
          </Button>
        </Link>
        <Link href='/pageone'>
          <Button variant='outline' size='lg'>
            pageone
          </Button>
        </Link>
        <Link href='/pagetwo'>
          <Button variant='outline' size='lg'>
            pagetwo
          </Button>
        </Link>
      </div>
    </header>
  )
}