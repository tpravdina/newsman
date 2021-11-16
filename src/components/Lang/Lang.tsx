import React, { useState } from 'react';

interface LangProps {
  className: string;
}

const languages = ['eng', 'ru', 'ua'];

const Lang: React.FC<LangProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <button
      className={`Lang ${className}`}
      onClick={() => setCurrentIndex((prev) => (prev + 1) % languages.length)}
      type="button"
    >
      {languages[currentIndex]}
    </button>
  );
};

export default Lang;
