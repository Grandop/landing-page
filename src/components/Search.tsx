import IconSearch from "@/assets/icon-search.svg";
import Image from "next/image";

export const Search = () => {
  return(
    <div className="flex justify-center mx-6 gap-4">
      <Image
        src={IconSearch}
        alt='Seach Icon' 
      />
      <input
        className="bg-transparent outline-none pr-6 text-white placeholder:text-white" 
        type="text" 
        placeholder="Buscar"
      />
    </div>
  );
}