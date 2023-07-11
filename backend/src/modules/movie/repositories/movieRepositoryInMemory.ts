import { MovieSchema } from "src/infra/integrations/schemas/movieSchema"
import { MovieRepository } from "./movieRepository"

const MOCKED_MOVIE = {
  Title: "Morrer Como Um Homem",
  Year: "2009",
  Rated: "Unrated",
  Released: "08 Apr 2011",
  Runtime: "134 min",
  Genre: "Drama, Music",
  Director: "João Pedro Rodrigues",
  Writer: "João Pedro Rodrigues, Rui Catalão, João Rui Guerra da Mata",
  Actors: "Chandra Malatitch, John Jesus Romão, Ivo Barroso",
  Plot: "A transgender woman tries to erase any past history of herself as a male. Struggling with a young male lover and a problematic son.",
  Language: "Portuguese, German, English",
  Country: "Portugal, France",
  Awards: "6 wins & 8 nominations",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTM4OTY5Mjg1M15BMl5BanBnXkFtZTcwNjc4OTc4NA@@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "6.4/10"
    },
    {
      Source: "Rotten Tomatoes",
      Value: "63%"
    },
    {
      Source: "Metacritic",
      Value: "68/100"
    }
  ],
  Metascore: "68",
  imdbRating: "6.4",
  imdbVotes: "1,236",
  imdbID: "tt1424361",
  Type: "movie",
  DVD: "23 Aug 2011",
  BoxOffice: "$4,029",
  Production: "N/A",
  Website: "N/A",
  Response: "True"
}

export class MovieRepositoryInMemory implements MovieRepository {
  public movies = [MOCKED_MOVIE]

  async findByTitle(title: string): Promise<MovieSchema> {
    return this.movies[0]
  }
}
