import './App.css';
import { UserProvider } from './contexts/UserContext'; // Adjust the path based on your project structure
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
import InstructorsPage from './pages/InstructorsPage';
import CoursesPage from './pages/CoursesPage';
import BadgesPage from './pages/BadgesPage';
import LoginPage from './pages/LoginPage';
import Chatbot from './pages/Chatbot';
import TestsPage from './pages/TestsPage';
import MyCoursesInstructorPage from './pages/MyCoursesInstructorPage';
import AdminInstructorPage from './pages/AdminInstructorsPage';
import AdminCoursesPage from './pages/AdminCoursesPage';
import SignupAdmin from './pages/SignupAdmin';
import SubjectsAdminPage from './pages/SubjectsAdminPage';
import ProfilePageInstructor from './pages/ProfilePageInstructor';
import CreateCourse from './pages/CreateCourse';
import InstructorProfileStudentDash from './pages/InstructorProfileStudentDash';
import SingularCoursePage from './pages/SingularCoursePage';
import SingularCoursePageAdmin from './pages/SingularCoursePageAdmin';
import SingularCoursePageInstructor from './pages/SingularCoursePageInstructor';
import PhetSimulation from './pages/PhetSimulation';


import ModulePage from './pages/modulePage';
import QuizInfo from './pages/QuizAnnouncement';
import QuizPage from './pages/QuizPage';

import ApprovalCoursePage from './pages/ApprovalCoursePage';


function App() {
  return (
    <UserProvider>
      <Router>
      <Routes>
      <Route path="/" element={<Homepage1 />} />
      <Route path="/phet-simulation" element={<PhetSimulation />} />
      <Route path="/module" element={<ModulePage/>} />
      <Route path="/signupAdmin" element={<SignupAdmin/>} />
      <Route path="/quizinfo" element={<QuizInfo/>} />
      <Route path="/testsPage" element={<TestsPage/>} />
      <Route path="/quizPage" element={<QuizPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chatbot" element={<Chatbot />} /> 
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
      <Route path="/verifications/:id" element={<VerificationsUpload/>} />
      <Route path="/gradepage" element={<GradePage />} />
      <Route path="/unitspage" element={<UnitsPage />} />
      <Route path="/instructors" element={<InstructorsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/badgesPage" element={<BadgesPage />} />
      <Route path="/myCourses" element={<MyCoursesInstructorPage />} />
      <Route path="/adminInstructorsPage" element={<AdminInstructorPage />} />
      <Route path="/adminCoursesPage" element={<AdminCoursesPage />} />
      <Route path="/adminSubjectsPage" element={<SubjectsAdminPage />} />
      <Route path="/profilePageInstructor" element={<ProfilePageInstructor />} />
      <Route path="/createCourse" element={<CreateCourse />} />
      {/* <Route path="/adminSubjectsPage" element={<SubjectsAdminPage />} /> */}
      <Route path="/createCourse" element={<CreateCourse />} />
      <Route path="/instructorProfileStudentDash" element={<InstructorProfileStudentDash />} />
      <Route path="/singularCoursePage" element={<SingularCoursePage />} />
      <Route path="/singularCoursePageAdmin" element={<SingularCoursePageAdmin />} />
      <Route path="/singularCoursePageInstructor" element={<SingularCoursePageInstructor />} />
      <Route path="/approvalCoursePage" element={<ApprovalCoursePage />} />















      </Routes>
    </Router>
    </UserProvider>
    
  );
}

export default App;
