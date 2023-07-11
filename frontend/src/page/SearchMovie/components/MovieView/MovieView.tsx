import { useState } from "react"
import { MovieViewSchema } from "./MovieView.schema"
import "./MovieView.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { SkeletonInformation } from "../SkeletonInformation/SkeletonInformation"

export const MovieView = ({
  movie,
  isLoading,
  searchValue
}: MovieViewSchema) => {
  const [favorites, setFavorites] = useState<string[]>([])
  const currentMovieIsFavorite = !!favorites.find(
    (favoriteMovieId) => favoriteMovieId === movie?.id
  )

  const handleChangeFavorite = () => {
    if (!movie?.id) return

    if (currentMovieIsFavorite) {
      setFavorites(
        favorites.filter((favoriteMovieId) => favoriteMovieId !== movie.id)
      )
    } else {
      setFavorites([...favorites, movie.id])
    }
  }

  if (isLoading) return <SkeletonInformation />

  if (searchValue === "") return <></>

  return (
    <section id="movie-view-component" className={isLoading ? "loading" : ""}>
      {!movie?.id && !isLoading ? (
        <h1 className="movie-not-found">Filme nao encontado :(</h1>
      ) : (
        <>
          <div className="information">
            <h1>{movie?.title}</h1>
            <p>{movie?.description}</p>
            <div className="criticize">
              <p>
                <span>Actor:</span> {movie?.actors}
              </p>
              <p>
                <span>Review:</span> {movie?.rating}
              </p>
            </div>
            <button className="secundary-button" onClick={handleChangeFavorite}>
              Favorite
              {currentMovieIsFavorite ? (
                <AiFillHeart className="icon" />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
          </div>
          <div>
            <img src={movie?.poster} alt="Poster" />
          </div>
        </>
      )}
    </section>
  )
}
