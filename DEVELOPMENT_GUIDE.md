# CourseHub Frontend — Development Guide

This document outlines the technical direction, architectural patterns, and development practices for the CourseHub Frontend using React and TypeScript.

---

## 1. UI/UX and Component Architecture

The frontend is divided into three main user experiences based on the required flows: Student, Instructor, and Admin.

### Problems to Solve

* **Routing and Protected Routes**: Restricting access to Instructor and Admin dashboards using role-based route guards. Handling redirects for unauthorized users.
* **State Management**: Managing global state such as authentication status, user profiles, and complex UI states (e.g., course creation multi-step wizard).
* **Data Fetching & Caching**: Efficiently fetching course lists, lessons, and statistics without blocking the UI, displaying skeleton loaders, and handling caching.
* **Form Handling & Validation**: Creating robust forms for course creation, user registration, and content moderation, ensuring strict type safety.
* **Performance**: Lazy loading routes based on the user role to reduce the initial bundle size, optimizing media, and minimizing unnecessary re-renders in large lists (e.g., course catalog).

---

## 2. Directory Structure Recommendation

To maintain scalability, the project should follow a feature-based or modular architecture:

```text
src/
├── assets/           # Images, icons, global styles
├── components/       # Shared UI components (Buttons, Modals, Inputs)
├── features/         # Feature-specific components and logic
│   ├── auth/
│   ├── student/
│   ├── instructor/
│   └── admin/
├── hooks/            # Custom React hooks
├── layouts/          # Page layouts (MainLayout, DashboardLayout)
├── pages/            # Page components mapping to routes
├── services/         # API services and HTTP clients
├── store/            # Global state management
├── types/            # TypeScript interfaces and types
└── utils/            # Helper functions
```

---

## 3. Main Frontend Concepts Demonstrated

* **Strong Typing**: Utilizing TypeScript interfaces and types for props, API responses, and application state.
* **Component Reusability**: Building atomic, reusable UI components.
* **Custom Hooks**: Abstracting complex logic (e.g., `useAuth`, `useCourseProgress`).
* **Role-Based Access Control (RBAC)**: Enforcing UI visibility based on the user's role (Student, Instructor, Admin).
* **Responsive Design**: Ensuring the application works seamlessly on desktop and mobile devices.
* **API Integration**: Handling loading states, error boundaries, and optimistic UI updates when interacting with the C# backend.
