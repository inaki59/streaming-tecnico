import React from 'react';
import {useFilteredContent} from '../hooks/useFilteredContent';
import {CardItem} from './CardItem';

export const ContentList=({ data, type })=> {
  const content = useFilteredContent(data, type);

  return (
    <div className="container">
      <h2 className="my-4 text-center">{type === 'movie' ? 'Películas' : 'Series'}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {content.map((item) => (
          <CardItem
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.images['Poster Art'].url}
            releaseYear={item.releaseYear}
          />
        ))}
      </div>
    </div>
  );
}


