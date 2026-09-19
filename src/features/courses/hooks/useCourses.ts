import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCourses, setSearchQuery, setSortBy } from '../store/coursesSlice';

export const useCourses = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error, searchQuery, sortBy } = useAppSelector((state) => state.courses);

  useEffect(() => {
    // Only fetch if we don't have items and aren't already loading
    if (items.length === 0 && !isLoading) {
      dispatch(fetchCourses());
    }
  }, [dispatch, items.length, isLoading]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handleSort = (sort: string) => {
    dispatch(setSortBy(sort));
  };

  // Filter and sort the courses
  const filteredCourses = items
    .filter((course) => {
      if (!searchQuery) return true;
      return course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id.localeCompare(a.id); // Simple mock logic for newest
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return b.students - a.students;
        case 'recommended':
        default:
          return b.rating - a.rating;
      }
    });

  return {
    courses: filteredCourses,
    totalCourses: items.length,
    isLoading,
    error,
    searchQuery,
    sortBy,
    handleSearch,
    handleSort,
  };
};
