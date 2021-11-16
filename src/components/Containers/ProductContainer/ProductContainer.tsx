import React, { useState, useEffect } from 'react';
import './ProductContainer.scss';

import { useCategoryContext } from '../../../contexts/useCategoryContext';
import ProductCard from '../../ProductCard';

interface Product{
    id: string,
    img: string,
    title: string,
    description: string,
    oldPrice: number,
    newPrice: number,
    category: string
}

interface ProductContainerProps{
  className: string
}

const ProductContainer:React.FC<ProductContainerProps> = ({ className }) => {
  const { category } = useCategoryContext();
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setProductsArray(data.products);
      });
  }, []);
  return (
    <div className={`ProductContainer ${className}`}>
      {
        productsArray
          .filter((elem) => elem.category === category)
          .slice(0, 3)
          .map((product:Product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))
    }
    </div>
  );
};

export default ProductContainer;
