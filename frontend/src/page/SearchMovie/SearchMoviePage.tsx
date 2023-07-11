import { MovieView } from "./MovieView/MovieView"
import { SearchMovie } from "./SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"

export const SearchMoviePage = () => {
  return (
    <div id="search-movie-page">
      <SearchMovie />
      <MovieView />
    </div>
  )
}
