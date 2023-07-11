import { MovieSchema } from "src/infra/integrations/schemas/movieSchema"

export class FindMovieViewModel {
  static toHTTP({
    Title,
    Plot,
    imdbRating,
    Actors,
    Poster,
    imdbID
  }: MovieSchema) {
    return {
      title: Title,
      description: Plot,
      rating: imdbRating,
      actors: Actors,
      poster: Poster,
      id: imdbID
    }
  }
}
