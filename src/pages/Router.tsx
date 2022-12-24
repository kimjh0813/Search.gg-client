import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'antd';

import { Menu } from '../components';
import Login from './login';
import Home from '.';
import Signup from './Signup';
import { Content, Header } from 'antd/lib/layout/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
