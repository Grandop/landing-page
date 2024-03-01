import Image from "next/image";

import { Search } from "./Search";

import Logo from '@/assets/logo.svg';
import { AccountButton } from "./Buttons/AccountButton";
import { Tabs } from "./Tabs";
import { Container } from "./Container";


export const Header = () => {
  return(
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <Container>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo"/>
            <Tabs/>
          </div>
          <Search/>
        </div>
        <AccountButton />
      </Container>
    </header>
  )
}