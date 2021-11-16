import { createContext, useContext } from 'react';

export type CategoryContext = {
  category: string
  setCategory:(category: string) => void
}
export const CategoryContext = createContext<CategoryContext>({
  category: 'sweater',
  setCategory: () => ({}),
});
export const useCategoryContext = () => useContext(CategoryContext);
