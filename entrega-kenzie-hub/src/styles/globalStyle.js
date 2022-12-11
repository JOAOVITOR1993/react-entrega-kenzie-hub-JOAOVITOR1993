import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

:root {
  --color-grey-4: #121214;
  --color-grey-3: #212529;
  --color-grey-2: #343B41;
  --color-grey-1: #868E96;
  --color-grey-0: #F8F9FA;
  --color-primary:#FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative:  #59323F;
  --color-negative: #E83F5B;
  --color-sucess: #3FE864;
  --color-background-modal: rgba(0, 0, 0, 0.2);
  
  --font-size-0: 1.62rem;
  --font-size-1: 1.12rem;
  --font-size-2: 1rem;
  --font-size-3: 0.87rem;
  --font-size-4: 0.75rem;

  --radius: 4px;
}

h1, h2, h3, h4, h5, p, a, span, button, input, label, select{
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
}

body{
  background-color: var(--color-grey-4);
}

.container{
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.pError {
    text-align: center;
    color: var(--color-negative);
  }

`