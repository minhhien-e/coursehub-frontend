import type { Note, NotesStats } from '../types';

export const mockNotes: Note[] = [
  {
    id: 'n1',
    title: 'Compound Components Key Takeaways',
    snippet: 'The compound component pattern allows you to create components that work together while sharing implicit state. Key points: use React.Children.map for iteration, cloneElement for prop injection, and context for deeply nested children. Remember to export both the parent and...',
    course: 'Advanced React Patterns',
    lesson: 'Compound Components Deep Dive',
    dateAdded: 'Jul 28, 2026',
    isPinned: true,
    courseTagColor: 'bg-fuchsia-500/20 text-fuchsia-400'
  },
  {
    id: 'n2',
    title: 'Design System Color Tokens',
    snippet: 'Always define colors as semantic tokens, not raw values. Use primary, secondary, accent, destructive, muted, etc. Map tokens to CSS custom properties. Ensure WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Dark mode should invert lightness, not hue.',
    course: 'UI/UX Design Masterclass',
    lesson: 'Color Theory & Accessibility',
    dateAdded: 'Jul 22, 2026 (edited Jul 23, 2026)',
    isPinned: true,
    courseTagColor: 'bg-pink-500/20 text-pink-400'
  },
  {
    id: 'n3',
    title: 'tRPC Type Safety Notes',
    snippet: 'tRPC provides end-to-end type safety without code generation. Define your router with procedures (query, mutation, subscription). Use Zod for input validation — it integrates seamlessly. The client infers types from the router definition. Middleware can be used for aut...',
    course: 'Full-Stack TypeScript',
    lesson: 'tRPC Router Setup',
    dateAdded: 'Jul 12, 2026 (edited Jul 14, 2026)',
    isPinned: true,
    courseTagColor: 'bg-orange-500/20 text-orange-400'
  },
  {
    id: 'n4',
    title: 'Render Props vs Hooks',
    snippet: 'Render props are still useful when you need to share behavior between components without HOCs. However, custom hooks have replaced most render prop use cases. Render props shine when you need inversion of control — letting the consumer decide how to render the UI while...',
    course: 'Advanced React Patterns',
    lesson: 'Render Props Pattern',
    dateAdded: 'Jul 26, 2026 (edited Jul 27, 2026)',
    isPinned: false,
    courseTagColor: 'bg-fuchsia-500/20 text-fuchsia-400'
  }
];

export const mockNotesStats: NotesStats = {
  total: 10,
  totalGrowth: 3,
  coursesWithNotes: 5,
  thisWeek: 2,
  pinned: 3,
};
