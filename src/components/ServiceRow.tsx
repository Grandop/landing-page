import Image from "next/image";

type Props = {
  serviceName: string
  icon: any
}

export const ServiceRow = ({ serviceName, icon }: Props) => {
  return(
    <li className="flex items-center gap-7 pb-9 border-b-[1px] border-opacity-gray">
      <div className="w-7 h-7 items-center justify-center">
        <Image src={icon} alt="icon phone"/>
      </div>
      <p className="flex-1 text-txt-gray pr-2">
        {serviceName}
      </p>
    </li>
  );
}