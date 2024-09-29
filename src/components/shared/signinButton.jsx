import { Button } from "../ui"
import GoogleIcon from '/public/image/svg/google.svg'


export const SigninButton = () => {
  return (
    <Button variant='functional' className="h-[52px] rounded mt-6 flex gap-x-2">
      <GoogleIcon/>
      <span className="mob:hidden">Продовжити з Google</span>
    </Button>
  )
}