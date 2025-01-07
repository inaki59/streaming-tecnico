import { useState, useEffect } from 'react';

export const useFilteredContent = (data, type) => {
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    if (!data || !data.entries) return;

    const filtered = data.entries
      .filter(
        (item) => item.releaseYear >= 2010 && item.programType === type
      )
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20);

    setFilteredContent(filtered);
  }, [data, type]);

  return filteredContent;
};

