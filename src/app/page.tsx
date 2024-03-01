import { Header } from "@/components/Header/Header";
import { SectionHero } from "@/components/Hero/SectionHero";
import { SectionServices } from "@/components/Services/SectionServices";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionServices />
    </>
  );
}
