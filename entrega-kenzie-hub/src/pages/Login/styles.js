import styled from "styled-components";

export const StyleLogin = styled.div`
  max-width: 23.12rem;
  width: 100%;
  margin: 0 auto;

  header{
    padding: 4.81rem 0 2.18rem 0;
    width: 100%;
  }

  header figure{
   display: flex;
   align-items: center;
   justify-content: center;
  }

  header figure img{
    width: 9rem;
    height: 1.25rem;
  }

  @media (max-width: 769px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;