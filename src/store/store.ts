import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/store/authSlice';
import coursesReducer from '../features/courses/store/coursesSlice';
import { assignmentsReducer } from '../features/assignments/store/assignmentsSlice';
import { calendarReducer } from '../features/calendar/store/calendarSlice';
import { certificatesReducer } from '../features/certificates/store/certificatesSlice';
import { achievementsReducer } from '../features/achievements/store/achievementsSlice';
import { mylearningReducer } from '../features/mylearning/store/mylearningSlice';
import { bookmarksReducer } from '../features/bookmarks/store/bookmarksSlice';
import { notesReducer } from '../features/notes/store/notesSlice';
import { notificationsReducer } from '../features/notifications/store/notificationsSlice';
import { billingReducer } from '../features/billing/store/billingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    assignments: assignmentsReducer,
    calendar: calendarReducer,
    certificates: certificatesReducer,
    achievements: achievementsReducer,
    mylearning: mylearningReducer,
    bookmarks: bookmarksReducer,
    notes: notesReducer,
    notifications: notificationsReducer,
    billing: billingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
