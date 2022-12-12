import styled from "styled-components";

export const BackGroundModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background-modal);
  position: fixed;
  inset: 0;
`

export const Modal = styled.div`
  background-color: var(--color-grey-3);
  max-width: 23.12rem;
  width: 100%;
  border-radius: var(--radius);

  > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1.25rem 0.87rem 1.25rem;
    border-radius: var(--radius) var(--radius) 0 0;
    background-color: var(--color-grey-2);
  }

  > div h1{
    font-size: var(--font-size-3);
  }

  > div button{
    color: var(--color-grey-1);
    width: auto;
    padding: 0;
    background-color: transparent;
    transition: 0.6s;
  }

  > div button:hover{
    color: var(--color-grey-0);
    transition: 0.6s;
  }

  form{
    padding: 0.75rem 1.25rem 0.87rem 1.25rem;
  }

  select {
    width: 100%;
    margin: 1rem 0;
    padding: 0.62rem 1rem;
    border: solid 1px transparent;
    border-radius: var(--radius);
    background-color: var(--color-grey-2);
    font-size: var(--font-size-2);
    color: var(--color-grey-1);
    cursor: pointer;
  }

  form div{
    display: flex;
    justify-content: space-between;
    gap: 1.37rem;
  }

  form button {
    margin: 1.25rem 0 0.5rem 0;
    background-color: var(--color-primary);
    transition: 0.6s
  }

  form button:hover {
    background-color: var(--color-primary-focus);
    transition: 0.6s
  }

  form div button:nth-child(1) {
    width: 12.75rem;
    margin: 1.25rem 0 0.5rem 0;
    background-color: var(--color-primary);
    transition: 0.6s
  }

  form div button:nth-child(1):hover {
    background-color: var(--color-primary-focus);
    transition: 0.6s
  }

  form div button:nth-child(2) {
    width: 6.12rem;
    margin: 1.25rem 0 0.5rem 0;
    background-color: var(--color-grey-1);
    transition: 0.6s
  }

  form div button:nth-child(2):hover {
    background-color: var(--color-grey-2);
    transition: 0.6s
  }

  @media (max-width: 769px) {
    max-width: 100%;
    margin: 0 1rem;

    form div{
    flex-direction: column;
    gap: 0;
  }

  form div button:nth-child(1) {
    width:100%;
  }

  form div button:nth-child(2) {
    width:100%;
  }
  }
`
