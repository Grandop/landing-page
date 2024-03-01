import { ServiceRow } from "./ServiceRow";

import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

export const ServicesList = () => {
  return(
    <ul className="flex flex-col items-start gap-9">
      <ServiceRow 
        icon={PhoneIcon} 
        serviceName="Acompanhar sua conta, fazer transferências e pagamentos 
        de onde estiver" 
      />
      <ServiceRow 
        icon={SolutionIcon} 
        serviceName="Soluções de empréstimos e renegociação para organizar suas finanças" 
      />
      <ServiceRow 
        icon={OptionsIcon} 
        serviceName="Diversas opções de investimentos, de acordo com o seu perfil de investidor" 
      />
      <ServiceRow 
        icon={CardIcon} 
        serviceName="Acompanhe a fatura do seu cartão de crédito e faça compras online
        com seu cartão virtual" 
      />
    </ul>
  );
}