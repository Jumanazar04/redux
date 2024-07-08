import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layaout from './components/Layaout';
import Home from './components/Home/Home';
import Categories from './components/Category/Categories';
import Products from './components/Product/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='category' element={<Categories />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
