import React from 'react';
import './Articles.scss';

import RectButton from '../../components/Buttons/RectButton';
import ArticleContainer from '../../components/Containers/ArticleContainer';
import Title from '../../components/Title';

const Articles: React.FC = () => (
  <div className="Articles" id="Articles">
    <Title modifier="left-line">Articles</Title>
    <ArticleContainer itemsNumber={6} />
    <RectButton withArrow modifier="short" className="Articles__button">more</RectButton>
  </div>
);

export default Articles;
