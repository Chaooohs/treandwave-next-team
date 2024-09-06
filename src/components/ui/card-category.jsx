import Image from "next/image";
import { Title } from ".";


export const CardCategory = ({ el }) => {
  return (
    <>
      <div className="bg-black lap:w-[224px] mob:w-[162px]">
        <Image src={el.image} alt="img" className="hover:opacity-80 duration-300"/>
      </div>
      <Title text={el.name} size="xs" className="font-mont font-semibold uppercase mt-3 mob:text-xs mob:mt-2" />
    </>
  );
};
