import "./SearchMovie.scss"
import { SearchMovieSchema } from "./SearchMovie.schema"

export const SearchMovie = ({
  searchValue,
  setSearchValue
}: SearchMovieSchema) => {
  return (
    <section id="search-movie-component">
      <header>
        <h1>Busque seus Filmes favoritos!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam,
          laudantium non tempore nesciunt possimus culpa enim explicabo optio
          voluptates doloremque odit quis vel id dolor.
        </p>
      </header>
      <form>
        <input
          className="primary-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="primary-button-outline">reset</button>
      </form>
    </section>
  )
}
