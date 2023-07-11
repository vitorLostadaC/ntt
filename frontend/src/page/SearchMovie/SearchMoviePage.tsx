import { useEffect, useState } from "react"
import { MovieView } from "./MovieView/MovieView"
import { SearchMovie } from "./SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"
import { MovieSchema } from "../../schemas/Movie.schema"
import { useDebounce } from "../../hooks/useDebounce"
import { useQuery } from "react-query"
import {
  FIND_MOVIE_BY_TITLE,
  findMovieByTitle
} from "../../services/MoviesService/MovieServiceService"

export const SearchMoviePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieSchema>()
  const [searchValue, setSearchValue] = useState<string>("")
  const debounceMovieValue = useDebounce(searchValue)

  const movieQuery = useQuery({
    queryKey: FIND_MOVIE_BY_TITLE,
    queryFn: () => findMovieByTitle({ title: debounceMovieValue }),
    retry: false
  })

  useEffect(() => {
    if (movieQuery.data) setCurrentMovie(movieQuery.data)
  }, [movieQuery.data])

  return (
    <div id="search-movie-page">
      <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
      {currentMovie && <MovieView movie={currentMovie} />}
    </div>
  )
}
