import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Cuisine from './pages/Cuisine';
import Home from './pages/Home';
import Searched from './pages/Searched';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:searchValue" element={<Searched />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



