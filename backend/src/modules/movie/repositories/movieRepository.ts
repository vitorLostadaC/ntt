import { MovieSchema } from "src/infra/integrations/schemas/movieSchema"

export abstract class MovieRepository {
  abstract findByTitle(title: string): Promise<MovieSchema>
}
