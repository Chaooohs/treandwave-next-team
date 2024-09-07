import { CardYou, Title } from "../ui"
import Heart from '../../../public/image/svg/heart2.svg'


export const YouSection = () => {
  return (
    <section>
      <div className="wrap mob:px-4">
        <div className="content">

          <div className="flex items-center gap-x-3">
            <Title text='Ви' size='xl' className='font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl' />
            <Heart className='w-48' />
          </div>

        </div>
      </div >
      <div className="lap:h-[450px] lap:relative lap:h-[396px] mob:h-[222px]">
        <div className="lap:flex lap:overflow-auto lap:absolute lap:inset-0 lap:pl-6 mob:pl-4 gap-x-6">
          <div className="relative"><CardYou/></div>
          <div className="relative"><CardYou/></div>
          <div className="relative"><CardYou/></div>
          <div className="relative"><CardYou/></div>
        </div>
      </div>
    </section>
  )
}