// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute component={StudentDashboard} requiredRole="student" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
