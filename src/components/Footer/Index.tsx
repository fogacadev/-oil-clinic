import { Card, CardContent, Container, Content, YearText } from "./styles";

export function Footer() {
    return (
        <Container>
            <Content>
                <CardContent>


                    <Card>
                        <h3>Sobre</h3>
                        <p>A clínico do óleo é especializado em soluções automotivas delivery.</p>
                    </Card>
                    <Card>
                        <h3>Horário de Atendimento</h3>
                        <p>De segunda à sexta-feira das 8h às 18h Sábado das 8h às 12h</p>
                    </Card>
                    <Card>
                        <h3>Contato</h3>
                        <p>Clinicodooleo@gmail.com</p>
                        <p>Whatsapp:(11)97096-0569</p>
                        <p>Nextel:(11) 94016-6531 Id.35*72*45846</p>
                    </Card>
                    <Card>
                        <h3>Siga-nos</h3>
                        <p>A clínico do óleo é especializado em soluções automotivas delivery,</p>
                    </Card>
                </CardContent>

                <YearText>Clinico do Óleo – Troca de Óleo Delivery - {new Date().getFullYear()}</YearText>
            </Content>
            
        </Container>
    )
}