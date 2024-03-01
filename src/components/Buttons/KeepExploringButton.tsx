import Image from "next/image";

type Props = {
  image: any
}

export const KeepExploringButton = ({ image }: Props) => {
  return(
    <button className="flex item-center gap-3">
      <Image src={image} alt="Arrow down"/>
      <span className="text-white text-sm font-bold">Continue explorando</span>
    </button>
  );
}