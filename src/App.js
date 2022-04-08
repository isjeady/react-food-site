import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Cuisine from './pages/Cuisine';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



