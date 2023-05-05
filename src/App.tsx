
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
