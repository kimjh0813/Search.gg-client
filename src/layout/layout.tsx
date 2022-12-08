import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Menu } from '../components';
import Login from '../pages/login';
import Home from '../pages';
import Search from '../pages/search';

const Layout = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
