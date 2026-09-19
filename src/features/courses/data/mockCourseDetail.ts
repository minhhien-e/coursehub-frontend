import type { CourseDetail } from '../types';

export const mockCourseDetail: CourseDetail = {
  id: '1',
  title: 'Advanced React Patterns & Performance',
  instructor: 'Dr. Sarah Mitchell',
  category: 'Development',
  level: 'Advanced',
  rating: 4.8,
  ratingCount: 3240,
  students: 18500,
  duration: '42h 30m',
  lessons: 156,
  price: 89.99,
  originalPrice: 149.99,
  discountBadge: '40% OFF',
  imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
  progress: 68,
  features: [
    '42 hours of video',
    '28 articles',
    '15 downloads',
    'Certificate of completion',
    'Full lifetime access'
  ],
  about: 'Take your React skills to the next level with advanced patterns used by top engineering teams. Learn compound components, render props, custom hooks, state machines, and performance optimization techniques that will make you a more effective React developer.',
  whatYouWillLearn: [
    'Build reusable compound components',
    'Optimize React rendering performance',
    'Create accessible component libraries',
    'Implement advanced hook patterns',
    'Use state machines for complex UI logic',
    'Master React Server Components'
  ],
  requirements: [
    'Intermediate React knowledge',
    'Basic TypeScript',
    'JavaScript ES6+'
  ],
  whoIsThisFor: [
    'Mid-level React developers',
    'Frontend engineers',
    'Tech leads'
  ],
  modules: [
    {
      id: 'm1',
      title: 'Introduction to Advanced Patterns',
      duration: '3h 20m',
      lessons: [
        { 
          id: 'l1', 
          title: 'Why Advanced Patterns Matter', 
          duration: '18:30', 
          isPreview: true,
          isCompleted: true,
          notes: 'In this lesson, we explore why moving beyond basic React knowledge is essential. We discuss how large-scale applications require more robust architectural decisions.',
          resources: [
            { title: 'Lesson slides (PDF)', type: 'pdf', url: '#' }
          ]
        },
        { 
          id: 'l2', 
          title: 'Setting Up the Development Environment', 
          duration: '12:00',
          isCompleted: true 
        },
        { 
          id: 'l3', 
          title: 'React Component Mental Models', 
          duration: '24:15',
          isCompleted: true 
        },
        { 
          id: 'l4', 
          title: 'Pattern Recognition Exercise', 
          duration: '30:00',
          isCompleted: true 
        },
        { 
          id: 'l5', 
          title: 'Module 1 Assessment', 
          duration: '15:00',
          isCompleted: true 
        }
      ]
    },
    {
      id: 'm2',
      title: 'Compound Components Pattern',
      duration: '4h 45m',
      lessons: [
        { 
          id: 'l6', 
          title: 'Understanding Compound Components', 
          duration: '22:00',
          isCompleted: true 
        },
        { 
          id: 'l7', 
          title: 'Building a Flexible Tabs Component', 
          duration: '45:00',
          isCompleted: true 
        },
        { 
          id: 'l8', 
          title: 'Context-Based Compound Components', 
          duration: '28:30',
          isCompleted: true 
        },
        { 
          id: 'l9', 
          title: 'Compound Component Deep Dive', 
          duration: '20:00',
          notes: 'In this lesson, we explore the Context-Based Compound Components pattern in depth. This approach uses React Context to share implicit state between related components, enabling flexible compositions while keeping the API clean.',
          resources: [
            { title: 'Lesson slides (PDF)', type: 'pdf', url: '#' },
            { title: 'Starter code (GitHub)', type: 'github', url: '#' }
          ]
        }
      ]
    },
    {
      id: 'm3',
      title: 'Custom Hooks Patterns',
      duration: '5h 10m',
      lessons: [
        { id: 'l10', title: 'The State Reducer Pattern', duration: '40:00' },
        { id: 'l11', title: 'Control Props Pattern', duration: '35:20' },
        { id: 'l12', title: 'Building a useWindowSize Hook', duration: '15:00' }
      ]
    },
    {
      id: 'm4',
      title: 'Performance Optimization',
      duration: '6h 00m',
      lessons: [
        { id: 'l13', title: 'Profiling React Apps', duration: '25:00' },
        { id: 'l14', title: 'useMemo and useCallback Deep Dive', duration: '45:00' },
        { id: 'l15', title: 'Code Splitting and Lazy Loading', duration: '30:00' }
      ]
    }
  ],
  reviews: [
    {
      id: 'r1',
      userId: 'u1',
      userName: 'Emily Zhang',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
      date: '2026-05-20',
      rating: 5,
      comment: 'Hands down the best React course I\'ve taken. The compound components section alone was worth the price. Sarah explains complex concepts in a way that just clicks.',
      helpfulCount: 42
    },
    {
      id: 'r2',
      userId: 'u2',
      userName: 'David Park',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      date: '2026-05-18',
      rating: 5,
      comment: 'After completing this course, I refactored our entire component library at work. My team lead was impressed with the patterns I introduced. Worth every penny.',
      helpfulCount: 38
    },
    {
      id: 'r3',
      userId: 'u3',
      userName: 'Rachel Torres',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
      date: '2026-05-12',
      rating: 4,
      comment: 'Great content and well-structured. I would have liked more exercises in the performance section. The hook patterns module was excellent though.',
      helpfulCount: 25
    }
  ],
  instructorDetails: {
    id: 'i1',
    name: 'Dr. Sarah Mitchell',
    title: 'Senior Software Engineer at Google',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
    rating: 4.8,
    students: 52340,
    courses: 8,
    bio: 'Dr. Sarah Mitchell has over 15 years of experience in software engineering. She previously led engineering teams at Google and Meta, specializing in distributed systems and full-stack development. Her courses have helped over 50,000 students worldwide.'
  }
};
