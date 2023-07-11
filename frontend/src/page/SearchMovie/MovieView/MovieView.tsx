import { MovieViewSchema } from "./MovieView.schema"
import "./MovieView.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export const MovieView = ({ movie }: MovieViewSchema) => {
  return (
    <section id="movie-view-component">
      <div className="information">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div className="criticize">
          <p>
            <span>Actor:</span> {movie.actors}
          </p>
          <p>
            <span>Review:</span> Estrelas... {movie.rating}
          </p>
        </div>
        <button className="secundary-button">
          Favorite <AiFillHeart className="icon" />
        </button>
      </div>
      <div>
        <img src={movie.poster} alt="Poster" />
      </div>
    </section>
  )
}
