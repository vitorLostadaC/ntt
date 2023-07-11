import { Injectable } from "@nestjs/common"
import { MovieSchema } from "src/infra/schemas/movieSchema"
import { MovieRepository } from "src/modules/movie/useCases/repositories/movieRepository"
interface GetMoviePropsSchema {
  title: string
}

@Injectable()
export class GetMovieUseCase {
  constructor(private movieRepository: MovieRepository) {}

  async execute(request: GetMoviePropsSchema): Promise<MovieSchema> {
    const { title } = request

    if (title === "") throw new Error("String vazia")

    return await this.movieRepository.findByTitle(title)
  }
}
