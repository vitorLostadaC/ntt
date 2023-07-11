import "./SearchMovie.scss"

export const SearchMoviePage = () => {
  return (
    <div>
      <section>
        <header>
          <h1>Busque seus Filmes favoritos!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            magnam, laudantium non tempore nesciunt possimus culpa enim
            explicabo optio voluptates doloremque odit quis vel id dolor. Qui
            hic saepe molestias?
          </p>
        </header>
        <form>
          <input type="text" />
          <button>Search</button>
          <button>reset</button>
        </form>
      </section>

      <section>
        <div>
          <h1>Movie Title</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            distinctio ea eveniet, maiores ab earum amet libero ipsum dolorem
            labore consectetur excepturi. Natus voluptatibus officia quidem
            facere, ipsa autem iusto?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis aut, laboriosam earum eaque sunt alias
            praesentium nihil atque ipsum ea. Enim maxime ullam rerum cumque
            optio excepturi vero fugiat recusandae?
          </p>
          <div>
            <p>
              <span>Actor:</span> Lorem ipsum
            </p>
            <p>
              <span>Review:</span> Estrelas...
            </p>
          </div>
          <button>Favorite (icon...)</button>
        </div>
        <div>
          <img src="" alt="Poster" />
        </div>
      </section>
    </div>
  )
}
