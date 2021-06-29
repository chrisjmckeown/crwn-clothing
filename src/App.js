import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
const Jackets = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);
const Sneakers = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
);
const Womens = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
);
const Mens = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={Jackets} />
        <Route path='/shop/sneakers' component={Sneakers} />
        <Route path='/shop/womens' component={Womens} />
        <Route path='/shop/mens' component={Mens} /> */}
      </Switch>
    </div>
  );
}

export default App;
