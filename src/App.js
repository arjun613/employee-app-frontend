import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/addemployee' exact element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
