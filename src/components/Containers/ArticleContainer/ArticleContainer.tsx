import React, { useState, useEffect } from 'react';
import './ArticleContainer.scss';
import Article from '../../Article';

interface ArticeProps {
  id: string;
  img: string;
  title: string;
  date: string;
  category: string;
  text: string;
}
interface ArticleContainerProps {
  itemsNumber: number;
}

const ArticleContainer: React.FC<ArticleContainerProps> = ({ itemsNumber }) => {
  const [articles, setArticles] = useState<ArticeProps[]>([]);
  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  });
  return (
    <div className="ArticleContainer">
      {articles.slice(0, itemsNumber).map((article) => (
        <Article
          key={article.id}
          img={article.img}
          title={article.title}
          date={article.date}
          category={article.category}
          text={article.text}
        />
      ))}
    </div>
  );
};
export default ArticleContainer;
