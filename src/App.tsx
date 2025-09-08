import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import RoutesElement from './routes'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <RoutesElement />
    <Footer />
  </BrowserRouter>
)

export default App
