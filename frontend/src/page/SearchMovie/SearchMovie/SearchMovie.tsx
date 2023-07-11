import "./SearchMovie.scss"

export const SearchMovie = () => {
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
        <input className="primary-input" type="text" />
        <button className="primary-button">Search</button>
        <button className="secondary-button">reset</button>
      </form>
    </section>
  )
}
