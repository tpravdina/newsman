import React, { useState, useEffect, useContext } from 'react';
import { useCategoryContext } from '../../contexts/useCategoryContext';
import ProductCard from '../ProductCard';
import './ProductsByCategory.scss';

interface Product{
    id: string,
    img: string,
    title: string,
    description: string,
    oldPrice: number,
    newPrice: number,
    category: string
}

interface ProductsByCategoryProps{
  className?: string,
}

const ProductsByCategory:React.FC<ProductsByCategoryProps> = ({ className }) => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setProductsArray(data.products);
      });
  }, []);

  const { category } = useCategoryContext();

  return (
    <div className={`ProductsByCategory ${className}`}>
      <div className="ProductsByCategory__card-container">
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
    </div>
  );
};

export default ProductsByCategory;
