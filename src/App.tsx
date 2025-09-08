import Footer from './components/Footer'
import Header from './components/Header'
import RestaurantsList from './containers/RestaurantsList'
import { GlobalStyle } from './styles'

const App = () => (
  <>
    <Header />
    <GlobalStyle />
    <RestaurantsList />
    <Footer />
  </>
)

export default App
