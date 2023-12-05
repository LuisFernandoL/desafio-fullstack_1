import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body, input, button, textarea {
        font-family: 'Lora', serif;
        font-size: 1.6rem;
    }

    button, select {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol, li {
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    input, textarea, select{
        border: 0;
        background: transparent;
    }
`
export default Reset