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
import SelectProfile from './pages/SelectProfile';
import SignUp1 from './pages/SignUp1'; // signup for students
import SignUp2 from './pages/SignUp2'; // signup for instructors step 1
import VerificationsUpload from './pages/VerificationsUpload'; // signup for instructors step 2
import GradePage from './pages/GradePage';
import UnitsPage from './pages/UnitsPage';


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
      <Route path="/selectProfile" element={<SelectProfile />} />
      <Route path="/signup1" element={<SignUp1 />} />
      <Route path="/signup2" element={<SignUp2/>} />
      <Route path="/verifications" element={<VerificationsUpload/>} />
      <Route path="/gradepage" element={<GradePage />} />
      <Route path="/unitspage" element={<UnitsPage />} />
      






      </Routes>
    </Router>
  );
}

export default App;
