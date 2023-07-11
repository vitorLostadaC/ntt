import { api } from "../../libs/api"
import {
  FindMovieByTitleRequestSchema,
  FindMovieByTitleResponseSchema
} from "./MovieServiceService.schema"

export const FIND_MOVIE_BY_TITLE = "findMovieByTitle"
export const findMovieByTitle = async ({
  title
}: FindMovieByTitleRequestSchema): Promise<FindMovieByTitleResponseSchema> =>
  api.get(`/movies/${title}`)
