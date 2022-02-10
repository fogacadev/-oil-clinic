import { Header } from "../../components/Header";
import { ServiceItem } from "../../components/ServiceItem/Index";
import { FaOilCan } from 'react-icons/fa';
import { GiCarKey} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai';

import { Container, ServicesContent,Title } from "./styles";
import { HowItWorks } from "../../components/HowItWorks";
import { MakeABudged } from "../../components/MakeABudget/Index";
import { Footer } from "../../components/Footer/Index";

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Title>Serviços</Title>
                <ServicesContent>
                    <ServiceItem title="Troca de óleo"
                        description="Deverá ser realizada utilizando sempre a viscosidade recomendada pela montadora do veículo respeitando o prazo estipulado no manual do proprietário"
                        Icon={FaOilCan} 
                        url="#"/>

                    <ServiceItem title="Troca do Filtro de Óleo"
                        description="Componente responsável por coletar toda impureza gerada pela combustão/explosão e retirada pelo lubrificante no interior do motor."
                        Icon={AiFillCar} 
                        url="#"/>

                    <ServiceItem title="Verificações"
                        description="Água do radiador;
                        Pastilha de freio;
                        Água do limpador do para-brisas;
                        Fluído de freio;
                        Fluído de direção hidráulica;
                        Óleo do câmbio;
                        Óleo do diferencial;
                        Troca de palhetas;
                        Troca de cabo de vela;"
                        Icon={GiCarKey} 
                        url="#"/>
                </ServicesContent>

            </Container>
            <HowItWorks/>
            <MakeABudged/>
            <Footer/>
        </>

    )
}