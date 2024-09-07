'use client'
import { createMedia } from "@artsy/fresnel"
// import { useMediaQuery } from "react-responsive"
import { HeaderDesk } from "./HeaderDesk"
import { HeaderMobile } from "./HeaderMobile"


export const Header = () => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 })
  // const isMobile = useMediaQuery({ maxWidth: 1023 })


  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      md: 0,
      lg: 1023,
    },
  })

  return (
    <>
      {/* {
        isDesktop &&
        <HeaderDesk />
      }
      {
        isMobile &&
        <HeaderMobile />
      } */}

      <MediaContextProvider>
        <Media at="md">
          <HeaderMobile />
        </Media>
        <Media at="lg">
          <HeaderDesk />
        </Media>
      </MediaContextProvider>

    </>
  )
}