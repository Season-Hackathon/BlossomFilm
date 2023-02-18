import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    margin: 0 auto;
    max-width: 479px;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>test2sadsaasasdds</h1>
    </div>
  );
}

export default App;
