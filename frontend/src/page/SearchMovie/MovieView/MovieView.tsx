import "./MovieView.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export const MovieView = () => {
  return (
    <section id="movie-view-component">
      <div className="information">
        <h1>Movie Title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          distinctio ea eveniet, maiores ab earum amet libero ipsum dolorem
          labore consectetur excepturi. Natus voluptatibus officia quidem
          facere, ipsa autem iusto?Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis aut, laboriosam earum eaque sunt alias
          praesentium nihil atque ipsum ea. Enim maxime ullam rerum cumque optio
          excepturi vero fugiat recusandae?
        </p>
        <div className="criticize">
          <p>
            <span>Actor:</span> Lorem ipsum
          </p>
          <p>
            <span>Review:</span> Estrelas...
          </p>
        </div>
        <button className="secundary-button">
          Favorite <AiFillHeart className="icon" />
        </button>
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjVhMTIzMzItZGU2MS00YWZhLWE5ZjktMjIyZWUyOTZkY2RkXkEyXkFqcGdeQXVyNjg2NjQxOTQ@._V1_SX300.jpg"
          alt="Poster"
        />
      </div>
    </section>
  )
}
