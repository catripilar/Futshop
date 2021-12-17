import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { Provider } from "react-redux";
import store from "./components/store";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import background from './pages/soccerbg3.jpg'
const App = () => {
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  if(localCart !== null) {store.dispatch({type: 'CHANGE_CART', localCart})}
  return (
    <div style={{ backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
      <Provider store={store}>
        <Container maxWidth='xl'>
          <BrowserRouter>
            <Header/>
            <Rotas/>
          </BrowserRouter>
        </Container>
      </Provider>
    </div>
  );
}
export default App;