import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';
import Search from '../pages/search';

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>

          <Route path="/search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
