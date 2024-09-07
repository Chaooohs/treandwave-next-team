import Link from "next/link"

export const BurgerMenu = () => {
  return (
    <div className=" w-[586px] h-screen box-border pt-5">
      <div className="wrap">
        <div className="font-semibold uppercase text-base inline-flex flex-col gap-y-4 mt-12">
          <Link href='/catalog' className="header-link">Усі</Link>
          <Link href='/sale' className="header-link">Sale</Link>
          <Link href='/collections' className="header-link">Колекції</Link>
          <Link href='#!' className="header-link">Бестселери</Link>
          <Link href='#!' className="header-link">Сукні</Link>
          <Link href='#!' className="header-link">Костюми</Link>
          <Link href='#!' className="header-link">футболки та Топи</Link>
        </div>
      </div>
    </div>
  )
}