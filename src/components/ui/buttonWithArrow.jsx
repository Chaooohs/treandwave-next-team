import Arrow from "../../../public/image/svg/arrow.svg";

export const ButtonWithArrow = () => {
  return (
    <div className="flex gap-x-1 header-link border-none">
      <button className="font-mont font-semibold text-base">переглянути все</button>
      <Arrow className="header-icon" />
    </div>
  )
}