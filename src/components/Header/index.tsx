import logoImg from '../../assets/logo.png'

import { Container, Content, Nav, NavContent, TellNow } from "./styles";

export function Header(){
    return(
        <Container>
            <Content>
                <NavContent>
                <img src={logoImg} alt="Clinico do óleo"/>
                    <Nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Quem somos</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Orçamento</a></li>
                            <li><a href="#">Galeria</a></li>
                        </ul>
                    </Nav>
                </NavContent>
                
                <TellNow>Ligue Agora! (11) 97096-0569</TellNow>
            </Content>
        </Container>
    )
}