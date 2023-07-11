import { MovieSchema } from "src/infra/schemas/movieSchema"

export class FindMovieViewModel {
  static toHTTP({ Title, Plot, imdbRating, Actors, Poster }: MovieSchema) {
    return {
      title: Title,
      description: Plot,
      rating: imdbRating,
      actors: Actors,
      poster: Poster
    }
  }
}
