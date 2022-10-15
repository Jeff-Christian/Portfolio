import './App.css';

// Pages
import Home from './Pages/Home/Home';

// Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
