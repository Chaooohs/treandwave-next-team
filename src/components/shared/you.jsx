import { CardYou, Title } from "../ui"
import Heart from '../../../public/image/svg/heart.svg'


export const YouSection = () => {
  return (
    <section>
      <div className="wrap mob:px-4">
        <div className="content">

          <div className="flex items-center gap-x-3">
            <Title text='Ви' size='xl' className='font-mul font-extrabold uppercase lap:text-3xl mob:text-2xl' />
            <Heart className='w-12 h-12 mob:w-6 mob:h-6' />
          </div>

        </div>
      </div >
      <div className="wrap lap:px-0">
        <div className="lap:h-[450px] lap:relative lap:h-[396px] mob:h-[222px]">
          <div className="grid grid-cols-4 lap:flex lap:overflow-auto lap:absolute lap:inset-0 lap:px-6 mob:px-4 gap-x-6">
            <div className="relative"><CardYou /></div>
            <div className="relative"><CardYou /></div>
            <div className="relative"><CardYou /></div>
            <div className="relative"><CardYou /></div>
          </div>
        </div>
      </div>
    </section>
  )
}