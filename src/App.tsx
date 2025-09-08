import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import RoutesElement from './routes'
import Overlay from './components/Overlay'

const App = () => {
  const showOverlay = false

  return (
    <BrowserRouter>
      {showOverlay && <Overlay />}
      <GlobalStyle />
      <RoutesElement />
      <Footer />
    </BrowserRouter>
  )
}

export default App
