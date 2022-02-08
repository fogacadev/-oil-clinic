import { IconType } from "react-icons";
import { Container, Content } from "./styles";

interface ServiceItemProps {
    title: string;
    description: string;
    Icon: IconType;
}

export function ServiceItem({ title, description, Icon }: ServiceItemProps) {

    return (
        <Container>
            <Icon width="30" height="30"/>
            <Content>
                <strong>{title}</strong>
                <p>{description}</p>
                <a href="#">mais detalhes</a>
            </Content>


        </Container>
    );
}