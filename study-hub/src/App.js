import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage1 from "./pages/Homepage1";
import DashboardStudent from './pages/DashboardStudent';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage1 />} />
      <Route path="/dashboardStudent" element={<DashboardStudent />} />

      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
