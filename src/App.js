// import logo from './logo.svg';
import './App.css';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;