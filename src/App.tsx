import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Footer from './components/Footer'
import { GlobalStyle } from './styles'
import RoutesElement from './routes'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesElement />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
