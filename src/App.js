import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Quotespage from './pages/Quotespage';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/Quotespage' element={<Quotespage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}




export default App;
