import { useEffect, useState } from 'react';

export const endpointDrink = (searchTerm, searchType) => {
  if (searchType === 'name') {
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  }
  if (searchType === 'ingredient') {
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
  }
  if (searchType === 'firstLetter') {
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`;
  }
};

export const endpointMeal = (searchTerm, searchType) => {
  if (searchType === 'name') {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  }
  if (searchType === 'ingredient') {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
  }
  if (searchType === 'firstLetter') {
    return `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;
  }
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const dataApi = await response.json();
        setData(dataApi);
      } catch (errorApi) {
        setError(errorApi.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, error, isLoading };
};

export const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
