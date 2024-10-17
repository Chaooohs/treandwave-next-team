
import Image from "next/image";
import { Title } from "../ui";


export default function CheckoutConfirmationCard ({ el }) {

  return (
    <div className="flex gap-2 p-6 lap:p-0 justify-between border-[1px] lap:border-none border-[#4D4D4D] ">
      <div className="w-full flex gap-3">
        <div className="h-full w-[126px]">
          <Image
            src={el.images}
            alt={el.title}
            width={100}
            height={180}
            className="h-full object-cover "
          />
        </div>
        <div className="flex lap:flex-col justify-between lap:justify-start lap:gap-2 w-full">
          <div className=" flex flex-col gap-5 lap:gap-2 w-full">
            <Title text={el.title} className="text-base font-semibold uppercase" />
            <div className="text-[#BABABA] font-medium flex normal-case gap-2">
              <p className="uppercase">{el.color} /</p>
              <p className="uppercase"> {el.size} /</p>
              <p> Кількість: {el.count}</p>
            </div>
          </div>

          <div className="flex uppercase text-lg flex-nowrap text-nowrap whitespace-nowrap">
              <h3 className="">{el.price} uah</h3>
          </div>
        </div>
      </div>
      
    </div>
  )
}