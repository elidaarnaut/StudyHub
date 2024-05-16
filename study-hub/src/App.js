import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2'; // signup for instructors step 1
import VerificationsUpload from './pages/VerificationsUpload'; // signup for instructors step 2

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup-instructor" element={<SignUp2 />} />
          <Route path="/verification" element={<VerificationsUpload />} />
          <Route path="/" element={<SignUp2 />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
