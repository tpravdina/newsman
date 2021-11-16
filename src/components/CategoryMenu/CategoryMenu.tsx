import React from 'react';
import './CategoryMenu.scss';

import { useCategoryContext } from '../../contexts/useCategoryContext';
import categories from '../../mock/categories';

interface CategoryMenuProps{
  className: string
}

const CategoryMenu:React.FC<CategoryMenuProps> = ({ className }) => {
  const { category, setCategory } = useCategoryContext();
  return (
    <div className={`CategoryMenu ${className}`}>
      {categories.map((elem) => (
        <div>
          <button
            className="CategoryMenu__button"
            type="button"
            value={elem}
            onClick={() => {
              setCategory(elem);
            }}
          >
            {elem}
          </button>
          {elem === category && (<hr className="CategoryMenu__button-underline" />)}
        </div>
      ))}
    </div>
  );
};
export default CategoryMenu;
