import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<div className="text-white text-center mt-10">Browse Courses (Coming soon)</div>} />
          <Route path="my-learning" element={<div className="text-white text-center mt-10">My Learning (Coming soon)</div>} />
          <Route path="assignments" element={<div className="text-white text-center mt-10">Assignments (Coming soon)</div>} />
          <Route path="calendar" element={<div className="text-white text-center mt-10">Calendar (Coming soon)</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
