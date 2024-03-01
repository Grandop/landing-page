import Image from "next/image";

import ArrowDown from "@/assets/arrow-down.svg";

type Props = {
  name: string;
}

export const ItemMenu = ({ name }: Props) => {
  return(
    <li>
      <button className="flex items-center gap-3">
        <span className="text-white font-bold">{name}</span>
        <Image src={ArrowDown} alt='Arrow Down' />
      </button>
    </li>
  );
}