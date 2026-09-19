import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { BrowseCourses, CourseDetails, LearnCourse } from './pages/Courses';
import { Assignments } from './pages/Assignments';
import { Calendar } from './pages/Calendar';
import { Certificates } from './pages/Certificates';
import { Achievements } from './pages/Achievements';
import { Login, Register, ForgotPassword, ResetPassword } from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* Standalone Pages (No MainLayout) */}
        <Route path="/courses/:id/learn" element={<LearnCourse />} />

        {/* Main App Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<BrowseCourses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="my-learning" element={<div className="text-white text-center mt-10">My Learning (Coming soon)</div>} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
