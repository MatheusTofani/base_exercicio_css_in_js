import styled, { createGlobalStyle } from "styled-components";

const EstiloGLobal = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
}

`

export default EstiloGLobal;

export const Container = styled.div`
width: 100%;
max-width: 1024px;
margin: 0 auto;

@media (max-width: 1024px) {
    width: 80%;
}
`
