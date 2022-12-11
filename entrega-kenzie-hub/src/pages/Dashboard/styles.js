import styled from "styled-components";

export const StyledDashBoard = styled.div`
 
 section:nth-child(2){
    width: 100%;
    padding: 2.81rem 0;
    border: solid 1px var(--color-grey-3);
    margin-bottom: 2.31rem;
 }

 section:nth-child(2) div {
    display: flex;
    justify-content: space-between;
  }

  section:nth-child(2) div h2 {
    font-size: var(--font-size-1);
    font-weight: 700;
  }

  section:nth-child(2) div p {
    font-size: var(--font-size-4);
    font-weight: 600;
    color: var(--color-grey-1);
  }

  section:nth-child(3) div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section:nth-child(3) div h3{
    font-size: var(--font-size-1);
    font-weight: 700;
  }

  section:nth-child(3) > div button{
    border-radius: var(--radius);
    width: 2rem;
    height: 2rem;
    padding: 0;
    background-color: var(--color-grey-3);
    font-size: var(--font-size-1);
    font-weight: 600;
    transition: 0.6s;
  }


  section:nth-child(3) > div button:hover{
    background-color: var(--color-grey-2);
    transition: 0.6s
  }

  section:nth-child(3) ul{
    max-height: 26rem;
    overflow: auto;
    width: 100%;
    padding: 1.43rem;
    background-color: var(--color-grey-3);
    border-radius: var(--radius);
    margin-top: 1.75rem;
  }

  section:nth-child(3) ul li{
    height: 3.06rem;
    width: 100%;
    padding: 0.81rem 1.37rem;
    background-color: var(--color-grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius);
    cursor: pointer;
    margin-bottom: 1rem;
    transition: 0.6s;
  }

  section:nth-child(3) ul li:hover{
    background-color: var(--color-grey-2);
    transition: 0.6s;
  }

  section:nth-child(3) ul li div{
    display: flex;
    justify-content: space-between;
    gap: 1.56rem;
  }

  section:nth-child(3) ul li div p{
    font-size: var(--font-size-4);
    font-weight: 400;
    color: var(--color-grey-1);
  }

  section:nth-child(3) ul li div button{
    padding: 0;
    background-color: transparent;
  }

  

  @media (max-width: 769px) {
    section:nth-child(2)  div {
    flex-direction: column;
    gap: 1rem;
  }
  }

`;

export const LoadingH1 = styled.h1`
  margin-top: 20%;
  text-align: center;
`
