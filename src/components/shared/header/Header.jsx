'use client'
import { useMediaQuery } from "react-responsive"
import { HeaderDesk } from "./HeaderDesk"
import { HeaderMobile } from "./HeaderMobile"


export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 1023 })

  return (
    <>
      {
        isDesktop &&
        <HeaderDesk />
      }
      {
        isMobile &&
        <HeaderMobile />
      }
    </>
  )
}