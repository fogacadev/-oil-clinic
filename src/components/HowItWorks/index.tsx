import { FaListAlt, FaShuttleVan } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import {GoChecklist} from "react-icons/go";

import { Card, CardContent, Container, Content, SubTitle, Title } from "./styles";

export function HowItWorks() {
    return (
        <Container>
            <Content>
                <Title>
                    Veja como funciona
                    
                </Title>
                <SubTitle>é facil e pratico</SubTitle>
                <CardContent>
                    <Card>
                        <GiRotaryPhone size="70" color="var(--blue-500)"/>
                        <h2>Contato</h2>
                        <p>
                            O cliente entra em contato por telefone, e-mail ou pelo site informando alguns dados de seu veículo e o tipo do serviço que deseja.
                        </p>
                    </Card>
                    <Card>
                        <FaListAlt size="70" color="var(--blue-500)"/>
                        <h2>Orçamento</h2>
                        <p>
                            Nossa equipe irá elaborar um orçamento do serviço de acordo com as necessidades do cliente.
                        </p>
                    </Card>
                    <Card>
                        <GoChecklist size="70" color="var(--blue-500)"/>
                        <h2>Aprovação</h2>
                        <p>
                            Nossa equipe irá elaborar um orçamento do serviço de acordo com as necessidades do cliente.
                        </p>
                    </Card>
                    <Card>
                        <FaShuttleVan size="70" color="var(--blue-500)"/>
                        <h2>Serviço</h2>
                        <p>
                            Nossa equipe irá elaborar um orçamento do serviço de acordo com as necessidades do cliente.
                        </p>
                    </Card>
                </CardContent>

            </Content>
        </Container>
    )
}