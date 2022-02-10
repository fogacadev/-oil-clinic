import styled from 'styled-components';

export const Container = styled.div`
    background: var(--blue-500);
    width:100vw;
`;

export const Content = styled.header`
    max-width:1120px;
    margin:0 auto;

    display:flex;
    padding: 2rem 1rem;
    align-items:center;
    justify-content:space-between;
`;

export const NavContent = styled.div`
    display:flex;
    align-items:center;

`;

export const Nav = styled.nav`
    margin: 0.5rem;

    ul {
        list-style: none;
        display:flex;

        li{
            margin-left: 1rem;
        }

        a{
            text-decoration:none;
            color:var(--white);

            transition: 0.2s filter;

            &:hover{
                filter:brightness(0.8)
            }
        }
    }
`

export const TellNow = styled.h3`
    color:var(--white);

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;