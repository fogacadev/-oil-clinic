import styled from "styled-components";


export const Container = styled.div`
    width:100vw;    
    background:var(--blue-500);
    display:flex;
    justify-content:center;

    padding: 1rem;

    a{
        font-size:2rem;
        color:var(--white);
        text-align:center;

        text-decoration: none;
        
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.05);
            text-decoration: underline;
        }
    }
`;

