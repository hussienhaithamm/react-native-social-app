// lib/api.ts
const BASE_URL = 'https://gorest.co.in/public/v2';
  
export const api = {
  async getPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  async getPostComments(postId: number) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
      if (!response.ok) throw new Error('Failed to fetch comments');
      return response.json();
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  }
};