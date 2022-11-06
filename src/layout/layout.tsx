import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../components/Home/Menu';
import Login from '../pages/login';
import Home from '../pages';
import Search from '../pages/search';

const Layout = () => {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
