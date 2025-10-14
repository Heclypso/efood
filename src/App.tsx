import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import RoutesElement from './routes'

import store from './store'

import { Container, GlobalStyle } from './styles'

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesElement />
          <Footer />
        </BrowserRouter>
      </Provider>
    </Container>
  )
}

export default App
