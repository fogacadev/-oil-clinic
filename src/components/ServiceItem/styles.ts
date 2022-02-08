import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    max-width:300px;
    padding:2rem 0;
    flex-direction:column;
    margin: 1rem;
`;

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    position:relative;
    padding-bottom:2rem;

    p{
        margin-top:1rem;
        text-align:justify;  
    }

    a{
        right:0;
        bottom:0;
        position: absolute;
        text-decoration: none;
        color: var(--blue-600);

        &:hover {
            text-decoration: underline;
        }
        
        
    }
    
`;