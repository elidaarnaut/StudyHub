import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage1 from "./pages/Homepage1";
import DashboardStudent from './pages/DashboardStudent';
import DashboardInstructor from './pages/DashboardInstructor';
import DashboardAdministrator from './pages/DasboardAdministrator';
import SubjectsPage from './pages/SubjectsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage1 />} />
      <Route path="/dashboardStudent" element={<DashboardStudent />} />
      <Route path="/dashboardInstructor" element={<DashboardInstructor />} />
      <Route path="/dashboardAdministrator" element={<DashboardAdministrator />} />
      <Route path="/subjects" element={<SubjectsPage />} />
      <Route path="/profile" element={<ProfilePage />} />





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
