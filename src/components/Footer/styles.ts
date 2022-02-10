import styled from "styled-components";

export const Container = styled.div`
    background: var(--gray-50);
    width:100vw;
`;

export const Content = styled.footer`
    max-width:1120px;
    margin: 0 auto;

    padding:4rem 2rem;
`

export const CardContent = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const YearText = styled.p`
    color:var(--gray-500);

    margin-top: 2rem;
`


export const Card = styled.div`
    display:flex;
    flex-direction:column;

    max-width:250px;

    align-items:space-between;

    h3{
        margin-bottom:1rem;
    }
    p{
        
        font-size:0.8rem;
    }
`
