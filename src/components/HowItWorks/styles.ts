import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    background: var(--yellow-500);
`;

export const Content = styled.div`
    max-width:1220px;
    margin: 0 auto;
    padding:2rem;

    
`;

export const Title = styled.h1`    
    color:var(--blue-500);
    text-align:left;
    font-size:2.5rem;
`;

export const SubTitle = styled.strong`
    color: var(--white);
`;

export const CardContent = styled.div`
    display: flex;
    margin-top:2rem;
    justify-content:space-between;
`;

export const Card = styled.div`
    width: 250px;
    display:flex;
    flex-direction: column;

    
    padding: 1rem;

    background: var(--yellow-500);    
    border: 1px solid var(--yellow-400);
    
    display:flex;
    border-radius:5px;

    transition: transform 0.2s;

    cursor:pointer;

    &:hover{
        transform: scale(1.1);
    }


    h2{
        color:var(--blue-500);
        margin-top: 1rem;
    }
    p{
        margin-top:0.5rem;
        color:white;
    }

`;