import { useState } from "react"
import { MovieView } from "./MovieView/MovieView"
import { SearchMovie } from "./SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"
import { MovieSchema } from "../../schemas/Movie.schema"
import { useDebounce } from "../../hooks/useDebounce"

export const SearchMoviePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieSchema>()
  const [searchValue, setSearchValue] = useState<string>("")
  const debounceMovieValue = useDebounce(searchValue)

  return (
    <div id="search-movie-page">
      <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
      {currentMovie && <MovieView movie={currentMovie} />}
    </div>
  )
}
