import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
  
  

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
