import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import AddPagination from "../pagination";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [languageFilter, setLanguageFilter] = useState("All");
  const  setCurrentPage = useState(1);
  const paginate = (pageNumber) =>setCurrentPage(pageNumber);
 
  const languages = ["All"];
  movies.map((l) => {
    if(!languages.includes(l.original_language)){
      languages.push(l.original_language)
    }
  })
  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return languageFilter === "All" ? true : m.original_language === languageFilter;
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "language") setLanguageFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '30px', backgroundColor:'#45494f'}}>
      <Grid item xs={12} sx={{marginBottom: '40px'}}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={2} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            languageFilter={languageFilter}
            languages={languages}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
        <AddPagination paginate ={paginate} />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;