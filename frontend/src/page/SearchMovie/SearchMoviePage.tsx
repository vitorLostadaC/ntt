import { MovieView } from "./MovieView/MovieView"
import { SearchMovie } from "./SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"

export const SearchMoviePage = () => {
  return (
    <div>
      <SearchMovie />
      <MovieView />
    </div>
  )
}
