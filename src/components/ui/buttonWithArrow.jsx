import Arrow from "../../../public/image/svg/arrow.svg";

export const ButtonWithArrow = () => {
  return (
    <div className="flex gap-x-1 header-link h-11">
      <button className="font-mont font-semibold text-base uppercase mob:text-sm">
        <span className="mob:hidden">переглянути</span>
        <span>все</span>
      </button>
      <Arrow className="header-icon" />
    </div>
  )
}