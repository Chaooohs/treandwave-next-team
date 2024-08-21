import Arrow from "../../../public/image/svg/arrow.svg";

export const ButtonWithArrow = () => {
  return (
      <div className="flex gap-x-1 header-link h-11">
        <button className="font-mont font-semibold text-base uppercase">переглянути все</button>
        <Arrow className="header-icon" />
      </div>
  )
}