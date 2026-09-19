import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCourses, fetchFilterOptions, setSearchQuery, setSortBy, setIsFilterOpen, toggleCategory, toggleLevel, clearFilters } from '../store/coursesSlice';

export const useCourses = () => {
  const dispatch = useAppDispatch();
  const { 
    items, isLoading, error, searchQuery, sortBy, 
    selectedCategories, selectedLevels, isFilterOpen,
    availableCategories, availableLevels
  } = useAppSelector((state) => state.courses);

  useEffect(() => {
    if (items.length === 0 && !isLoading) {
      dispatch(fetchCourses());
    }
    if (availableCategories.length === 0) {
      dispatch(fetchFilterOptions());
    }
  }, [dispatch, items.length, isLoading, availableCategories.length]);

  const handleSearch = (query: string) => dispatch(setSearchQuery(query));
  const handleSort = (sort: string) => dispatch(setSortBy(sort));
  const handleSetIsFilterOpen = (isOpen: boolean) => dispatch(setIsFilterOpen(isOpen));
  const handleToggleCategory = (category: string) => dispatch(toggleCategory(category));
  const handleToggleLevel = (level: string) => dispatch(toggleLevel(level));
  const handleClearFilters = () => dispatch(clearFilters());

  // Filter and sort the courses
  const filteredCourses = items
    .filter((course) => {
      // Search filter
      if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !course.instructor.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(course.category)) {
        return false;
      }
      
      // Level filter
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id.localeCompare(a.id);
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
    selectedCategories,
    selectedLevels,
    isFilterOpen,
    availableCategories,
    availableLevels,
    setIsFilterOpen: handleSetIsFilterOpen,
    handleSearch,
    handleSort,
    handleToggleCategory,
    handleToggleLevel,
    handleClearFilters,
  };
};
