import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Quotespage from './Components/Quotespage';
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
