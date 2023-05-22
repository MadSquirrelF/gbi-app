
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import './scss/app.scss';
import Cart from './pages/Cart';
import FullProduct from './pages/FullProduct';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='' element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<FullProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
