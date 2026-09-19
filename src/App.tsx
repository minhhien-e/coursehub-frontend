import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
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

        {/* Main App Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<div className="text-white text-center mt-10">Browse Courses (Coming soon)</div>} />
          <Route path="my-learning" element={<div className="text-white text-center mt-10">My Learning (Coming soon)</div>} />
          <Route path="assignments" element={<div className="text-white text-center mt-10">Assignments (Coming soon)</div>} />
          <Route path="calendar" element={<div className="text-white text-center mt-10">Calendar (Coming soon)</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
