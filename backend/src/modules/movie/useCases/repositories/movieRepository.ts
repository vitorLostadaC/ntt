import { MovieSchema } from "src/infra/schemas/movieSchema"

export abstract class MovieRepository {
  abstract findByTitle(title: string): Promise<MovieSchema>
}
