import { ItemMenu } from "./ItemMenu";

export const Tabs = () => {
  return(
    <ul className="flex items-center gap-14">
      <ItemMenu name="Para você"/>
      <ItemMenu name="Para empresas"/>
      <ItemMenu name="Serviços"/>
      <ItemMenu name="Ajuda"/>
    </ul>
  );
}