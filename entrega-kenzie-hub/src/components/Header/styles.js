import styled from "styled-components";

export const StyledHeader = styled.header`
padding: 1.25rem 0;
width: 100%;

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav figure img{
    width: 7.62rem;
    height: 1.31rem;
}

nav a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: var(--radius);
    width: 3.43rem;
    height: 2rem;
    background-color: var(--color-grey-3);
    font-size: var(--font-size-4);
    font-weight: 600;
    cursor: pointer;
    transition: 0.6s
}

nav a:hover{
    background-color: var(--color-grey-2);
    transition: 0.6s
}

@media (max-width: 769px) {
    nav{
    flex-direction: column;
    gap: 1rem;
}

nav a{
    width: 100%;
}
  }
`