import { DefaultBtn, Title } from 'pages/SharedStyles';
import React, { useEffect } from 'react';
import { SearchInput, StyledSearchForm } from './SearchFormStyled';
import { fetchMoviesByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ setMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.query.value;
    setSearchParams({ query: value });
  };
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query.trim()).then(res => setMovies(res));
    }
  }, [query, setMovies]);

  return (
    <>
      <StyledSearchForm onSubmit={e => handleFormSubmit(e)}>
        <Title>Look for movie : </Title>
        <SearchInput name="query" type="text" placeholder="Search..." />
        <DefaultBtn type="submit">Let`s find</DefaultBtn>
      </StyledSearchForm>
    </>
  );
};

export default SearchForm;
