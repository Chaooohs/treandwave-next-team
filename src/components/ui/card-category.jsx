import Image from "next/image";
import { Title } from ".";


export const CardCategory = ({ el }) => {
  return (
    <>
      <div className="bg-black lg:w-[224px]">
        <Image src={el.image} alt="img" className="hover:opacity-80 duration-300"/>
      </div>
      <Title text={el.name} size="xs" className="font-mont font-semibold uppercase mt-3" />
    </>
  );
};
