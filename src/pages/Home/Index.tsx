import { Header } from "../../components/Header";
import { ServiceItem } from "../../components/ServiceItem/Index";
import { FaOilCan } from 'react-icons/fa';

export function Home() {
    return (
        <>
            <Header />
            <ServiceItem title="Troca de óleo" 
            description="Deverá ser realizada utilizando sempre a viscosidade recomendada pela montadora do veículo respeitando o prazo estipulado no manual do proprietário"
            Icon={FaOilCan}/>

<ServiceItem title="Troca de óleo" 
            description="Deverá ser realizada utilizando sempre a viscosidade recomendada pela montadora do veículo respeitando o prazo estipulado no manual do proprietário"
            Icon={FaOilCan}/>

<ServiceItem title="Troca de óleo" 
            description="Deverá ser realizada utilizando sempre a viscosidade recomendada pela montadora do veículo respeitando o prazo estipulado no manual do proprietário"
            Icon={FaOilCan}/>
        </>
    )
}