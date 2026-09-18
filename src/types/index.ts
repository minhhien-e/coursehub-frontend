export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'Student' | 'Instructor' | 'Admin';
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  isSuccess: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  totalPages: number;
}
