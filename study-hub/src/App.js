import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectProfile from './pages/SelectProfile';
import SignUp1 from './pages/SignUp1'; // signup for students
import SignUp2 from './pages/SignUp2'; // signup for instructors step 1
import VerificationsUpload from './pages/VerificationsUpload'; // signup for instructors step 2
import GradePage from './pages/GradePage';
import DashboardInstructor from './pages/DashboardInstructor'; // Import the DashboardInstructor component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        <Route path="/grade-page" element={<GradePage />} />
          <Route path="/select-profile" element={<SelectProfile />} />
          <Route path="/signup-student" element={<SignUp1 />} />
          <Route path="/signup-instructor" element={<SignUp2 />} />
          <Route path="/verification" element={<VerificationsUpload />} />
          <Route path="/dashboard-instructor" element={<DashboardInstructor />} /> {/* Add the route for DashboardInstructor */}
          <Route path="/" element={<SelectProfile />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
