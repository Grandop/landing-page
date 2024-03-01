import Image from "next/image";

import UserIcon from '@/assets/icon-user.svg';

export const AccountButton = () => {
  return(
    <button 
      className="flex items-center gap-4 bg-primary-blue p-4 rounded-full "
    >
      <Image src={UserIcon} alt="User Icon" />
      <span className="text-white font-bold">Acessar conta</span>
    </button>
  );
}