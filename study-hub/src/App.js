import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage1 from "./pages/Homepage1";
import DashboardStudent from './pages/DashboardStudent';
import DashboardInstructor from './pages/DashboardInstructor';
import DashboardAdministrator from './pages/DasboardAdministrator';
import SubjectsPage from './pages/SubjectsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage1 from './pages/SettingsPage1';
import SettingsPage2 from './pages/SettingsPage2';
import SettingsPage3 from './pages/SettingsPage3';

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
      <Route path="/settings1" element={<SettingsPage1 />} />
      <Route path="/settings2" element={<SettingsPage2 />} />
      <Route path="/settings3" element={<SettingsPage3 />} />






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
