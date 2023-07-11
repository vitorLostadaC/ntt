import { useEffect, useState } from "react"
import { SearchMovie } from "./components/SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"
import { MovieSchema } from "../../schemas/Movie.schema"
import { useDebounce } from "../../hooks/useDebounce"
import { useQuery } from "react-query"
import {
  FIND_MOVIE_BY_TITLE,
  findMovieByTitle
} from "../../services/MoviesService/MovieServiceService"
import { MovieView } from "./components/MovieView/MovieView"
import { mapperToRemoveNaValues } from "./utils/mapperToRemoveNaValues"

export const SearchMoviePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieSchema>()
  const [searchValue, setSearchValue] = useState<string>("")
  const debounceMovieValue = useDebounce(searchValue)

  const movieQuery = useQuery({
    queryKey: [FIND_MOVIE_BY_TITLE, debounceMovieValue],
    queryFn: () => findMovieByTitle({ title: debounceMovieValue }),
    enabled: debounceMovieValue !== "",
    retry: false,
    staleTime: 60 * 60 * 24 // 24 horas
  })

  useEffect(() => {
    if (movieQuery.data) setCurrentMovie(movieQuery.data)
  }, [movieQuery.data])

  return (
    <div id="search-movie-page">
      <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
      {currentMovie && (
        <MovieView
          movie={mapperToRemoveNaValues(currentMovie)}
          isLoading={movieQuery.isLoading}
        />
      )}
    </div>
  )
}
