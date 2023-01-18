import Menu from 'components/Menu';
import ModalManager from 'components/ModalManager';
import Home from 'pages/home';
import Search from 'pages/search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search/:name' element={<Search />}></Route>
        </Route>
      </Routes>
      <ModalManager />
    </BrowserRouter>
  );
};

export default Router;
