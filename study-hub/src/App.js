import React from 'react';
//import Login from './pages/Login';
import SelectProfile from './pages/SelectProfile'; // Make sure this path is correct based on your folder structure

import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Commented the login out, testing select profile */}
      </header>
      <SignUp/>
      
    </div>
  );
}

export default App;
