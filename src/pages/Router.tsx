import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from 'pages/login';
import Home from 'pages/home';
import Signup from 'pages/Signup';
import Search from 'pages/search';

import Menu from 'components/Menu';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
