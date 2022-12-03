import styled from "styled-components";

export const StyledDashBoard = styled.div`
 
 section{
    width: 100%;
    padding: 2.81rem 0;
    border: solid 1px var(--color-grey-3);
    margin-bottom: 2.31rem;
 }

 section div {
    display: flex;
    justify-content: space-between;
  }

  section div h2 {
    font-size: var(--font-size-1);
    font-weight: 700;
  }

  section div p {
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--color-grey-1);
  }

  div h3{
    font-size: var(--font-size-1);
    font-weight: 700;
    margin-bottom: 1.43rem;
  }

  div p{
    font-size: var( --font-size-2);
    font-weight: 400;
  }

  @media (max-width: 769px) {
    section div {
    flex-direction: column;
    gap: 1rem;
  }
  }

`;
