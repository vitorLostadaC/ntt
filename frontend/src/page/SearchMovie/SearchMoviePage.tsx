import { useState } from "react"
import { MovieView } from "./MovieView/MovieView"
import { SearchMovie } from "./SearchMovie/SearchMovie"
import "./SearchMoviePage.scss"
import { MovieSchema } from "../../schemas/Movie.schema"

export const SearchMoviePage = () => {
  const [currentMovie, setCurrentMovie] = useState<MovieSchema>()

  return (
    <div id="search-movie-page">
      <SearchMovie />
      <MovieView />
    </div>
  )
}
