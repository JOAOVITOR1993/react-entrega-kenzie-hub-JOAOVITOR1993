import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: auto;
  padding: 2.62rem 1.37rem 1.75rem 1.37rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  background-color: var(--color-grey-3);
  margin: 0 auto;

  h2 {
    margin-bottom: 1.37rem;
    text-align: center;
  }

  p{
    margin: 1.37rem 0;
    text-align: center;
    color: var(--color-grey-1);
  }

  p:nth-child(2) {
    margin-bottom: 1.37rem;
    text-align: center;
    color: var(--color-grey-1);
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

  button {
    margin: 1.25rem 0 0.5rem 0;
    background-color: var(--color-primary);
    transition: 0.6s
  }

  button:hover {
    background-color: var(--color-primary-focus);
    transition: 0.6s
  }

  button:nth-child(6) {
    margin: 1.25rem 0 0.5rem 0;
    background-color: var(--color-grey-1);
    transition: 0.6s
  }

  button:nth-child(6):hover{
    background-color: var(--color-grey-2);
    transition: 0.6s
}

`;
