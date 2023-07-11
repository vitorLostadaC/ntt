import { MovieSchema } from "../../schemas/Movie.schema"

export interface FindMovieByTitleRequestSchema {
  title: string
}

export interface FindMovieByTitleResponseSchema extends MovieSchema {}
