import Image from "next/image";


export const CardCategory = ({ el }) => {

  return (
    <>
      <div className="bg-black lap:w-[224px] mob:w-[162px]">
        <Image src={el.image} alt={el.name} width={322} height={400} className="hover:opacity-80 duration-300" />
      </div>
      <div className="card-font-size font-semibold uppercase mt-3 lap:text-base mob:text-xs" >
        {el.name}
      </div>
    </>
  );
};
