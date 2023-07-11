import { MovieSchema } from "../../../../schemas/Movie.schema"

export interface MovieViewSchema {
  movie: MovieSchema
  isLoading: boolean
}
