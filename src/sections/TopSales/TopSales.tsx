import React from 'react';
import './TopSales.scss';

import Title from '../../components/Title';
import CategoryMenu from '../../components/CategoryMenu';
import ProductContainer from '../../components/Containers/ProductContainer';
import RectButton from '../../components/Buttons/RectButton';

const TopSales: React.FC = () => (
  <div className="TopSales" id="TopSales">
    <Title className="TopSales__title" modifier="center-no-line">Top sales</Title>
    <p className="TopSales__text">Exercitation veniam consequat sunt nostrud amet.</p>
    <CategoryMenu className="TopSales__menu" />
    <ProductContainer className="TopSales__products" />
    <RectButton withArrow className="TopSales__button">catalog</RectButton>
  </div>
);

export default TopSales;
