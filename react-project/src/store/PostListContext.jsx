import { createContext } from 'react';

export const PostListContext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});
