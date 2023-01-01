import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Signup from './Signup';
import Menu from 'components/Menu';

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
