import Image from "next/image";

import { Container } from "../Container";
import { ServicesList } from "./ServicesList";
import { ServicesTitle } from "./ServicesTitle";

import ImagePhone from "@/assets/phone.png";

export const SectionServices = () => {
  return(
    <section className="relative w-full h-[965px]"> 
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <ServicesTitle />
          <ServicesList />
        </div>
      </Container>
      <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
        <Image 
          src={ImagePhone} 
          alt="Image Phone" 
          className="translate-x-[-50%]"
        />
      </div>
    </section>
  );
}