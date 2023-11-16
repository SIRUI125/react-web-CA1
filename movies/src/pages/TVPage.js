import React from "react";
import { getTV } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

// TVPage functional component.
  const TVPage = (props) => {
// Using the useQuery hook to fetch TV data. 'TV' is the query key and getTV is the query function.
  const {  data, error, isLoading, isError }  = useQuery('TV', getTV)
// Handling the loading state. If data is being loaded, the Spinner component is rendered.
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TV = data.results;
//const addToFavorites = (movieId) => true 
// Rendering the PageTemplate component with the title and the TV shows data.
  return (
    <PageTemplate
      title="Discover TV"
      TVs={TV}
    />
);
};
export default TVPage;