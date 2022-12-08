import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Menu } from '../components';
import Login from '../pages/login';
import Home from '../pages';
import Signup from '../pages/Signup';

const Layout = () => {
  return (
    <BrowserRouter>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BrowserRouter>
  );
};

export default Layout;
