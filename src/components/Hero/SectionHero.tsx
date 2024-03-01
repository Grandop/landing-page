import Image from "next/image";

import { Container } from "../Container";

import ImgAppleStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import ArrowExplorer from "@/assets/arrow-explorer.svg";
import Woman from "@/assets/woman.png";
import { ImageButton } from "../Buttons/ImageButton";
import { Title } from "./Title";
import { KeepExploringButton } from "../Buttons/KeepExploringButton";

export const SectionHero = () => {
  return(
    <section 
      className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover"
    >
      <Container>
        <div className="flex-1 max-w-[500px]">
          <Title/>
          <div className="flex gap-4 mb-24">
            <ImageButton image={ImgAppleStore} alt="apple store"/>
            <ImageButton image={ImgGooglePlay} alt="google play"/>
          </div>
          <KeepExploringButton image={ArrowExplorer}/>
        </div>
        <Image src={Woman} alt="Woman" className="mr-[-41px]"/>
      </Container>
    </section>
  )
}