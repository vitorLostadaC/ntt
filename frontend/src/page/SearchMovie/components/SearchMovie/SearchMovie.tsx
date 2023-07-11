import "./SearchMovie.scss"
import { SearchMovieSchema } from "./SearchMovie.schema"
import React from "react"

export const SearchMovie = ({
  searchValue,
  setSearchValue,
  setIsTyping
}: SearchMovieSchema) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setIsTyping(true)
  }

  const handleResetInput = () => {
    setSearchValue("")
  }

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
          onChange={handleChangeInput}
        />
        <button
          className="primary-button-outline"
          type="reset"
          onClick={handleResetInput}
        >
          reset
        </button>
      </form>
    </section>
  )
}
