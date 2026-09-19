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
import { MyLearning } from './pages/MyLearning';
import { Bookmarks } from './pages/Bookmarks';
import { Notes } from './pages/Notes';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { Billing } from './pages/Billing';
import { Pricing } from './pages/Pricing';
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
        <Route path="/pricing" element={<Pricing />} />

        {/* Main App Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<BrowseCourses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="my-learning" element={<MyLearning />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="notes" element={<Notes />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="billing" element={<Billing />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
