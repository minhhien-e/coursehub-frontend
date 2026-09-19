import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import coursesReducer from '../features/courses/store/coursesSlice';
import { assignmentsReducer } from '../features/assignments/store/assignmentsSlice';
import { calendarReducer } from '../features/calendar/store/calendarSlice';
import { certificatesReducer } from '../features/certificates/store/certificatesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    assignments: assignmentsReducer,
    calendar: calendarReducer,
    certificates: certificatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
