import React from 'react';
import './Article.scss';

interface ArticleProps{
    img: string,
    title: string,
    date: string,
    category: string,
    text: string
}

const Article:React.FC<ArticleProps> = ({
  img, title, date, category, text,
}) => (
  <div className="Article">
    <img className="Article__img" src={img} alt={img} />
    <h3 className="Article__title">{title}</h3>
    <div className="Article__date-categoty-container">
      <p className="Article__date">{date}</p>
      <p className="Article__vertical-bar">|</p>
      <p className="Article__category">{category}</p>
    </div>
    <p className="Article__text">{text}</p>
  </div>
);

export default Article;
