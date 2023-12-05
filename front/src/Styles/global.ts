import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--color-color-primary: #55A3FF;
	--color-grey-2: #000000;
	--color-grey-1: #F3F3F3;
	--color-grey-0: #FFFFFF;
  font-size: 62.5%;
}
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 122rem;
  padding: 0 2rem;
`

export default GlobalStyle
