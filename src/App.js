import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

// Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/projetos" element={<Projects></Projects>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
