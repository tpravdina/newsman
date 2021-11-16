import React from 'react';
import './ProductCard.scss';

interface ProductProps{
    img: string,
    title: string,
    description: string,
    oldPrice: number,
    newPrice: number
}

const ProductCard:React.FC<ProductProps> = ({
  img, title, description, oldPrice, newPrice,
}) => (
  <div className="ProductCard">
    <img className="ProductCard__img" src={img} alt={img} />
    <h3 className="ProductCard__title">{title}</h3>
    <p className="ProductCard__description">{description}</p>
    <p className="ProductCard__oldPrice">{`$${oldPrice}`}</p>
    <p className="ProductCard__newPrice">{`$${newPrice}`}</p>
  </div>
);

export default ProductCard;
