import { RoutesMain } from "./Routes/RoutesMain"
import GlobalStyle from "./Styles/global"
import Reset from "./Styles/reset"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Reset/>
      <RoutesMain />
    </>
  )
}

export default App
