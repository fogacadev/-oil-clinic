import styled from 'styled-components'

export const Container = styled.div`
    max-width:250px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1rem;

    p{
        text-align:justify;  
    }

    a{
        margin-top:1rem;
    }
`;