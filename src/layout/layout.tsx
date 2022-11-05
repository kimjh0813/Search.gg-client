import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';
const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
