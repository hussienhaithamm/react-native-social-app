// Post type
export interface Post {
    id: number;
    user_id: number;
    title: string;
    body: string;
    created_at?: string; // Optional: Timestamp of when the post was created
    updated_at?: string; // Optional: Timestamp of when the post was last updated
  }
  
  // Comment type
  export interface Comment {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
    created_at?: string; // Optional: Timestamp of when the comment was created
    updated_at?: string; // Optional: Timestamp of when the comment was last updated
  }
  
  // User type (if needed)
  export interface User {
    id: number;
    name: string;
    email: string;
    avatar_url?: string; // Optional: URL to the user's avatar
  }
  
  // API Response type (for paginated or metadata responses)
  export interface ApiResponse<T> {
    data: T[];
    meta?: {
      total: number;
      current_page: number;
      last_page: number;
      per_page: number;
    };
  }