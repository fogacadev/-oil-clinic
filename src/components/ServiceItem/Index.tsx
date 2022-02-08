import { IconType } from "react-icons";
import { Container, Content } from "./styles";

interface ServiceItemProps {
    title: string;
    description: string;
    Icon: IconType;
    url?: string;
}

export function ServiceItem({ title, description, Icon, url = "" }: ServiceItemProps) {

    return (
        <Container>
            <Content>
                <Icon size={70} color="var(--yellow-400)" />
                <h3>{title}</h3>
                <p>{description}</p>
                {url !== "" && <a href={url}>mais detalhes</a>}
            </Content>
        </Container>
    );
}