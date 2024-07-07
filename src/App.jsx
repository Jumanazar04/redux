import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Porduct from './components/Product/porduct';
import Layaout from './components/Layaout';
import Home from './components/Home/Home';
import Categories from './components/Category/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Porduct />} />
          <Route path='category' element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
