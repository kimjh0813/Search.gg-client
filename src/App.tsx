import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
