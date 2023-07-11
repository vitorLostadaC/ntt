import { Controller, Get, Param } from "@nestjs/common"
import { GetMovieUseCase } from "src/modules/movie/useCases/getMovieUseCase/getMovieUseCase"
import { FindMovieViewModel } from "./viewModels/findMovieViewModel"

@Controller("movies")
export class MovieController {
  constructor(private getMovieUseCase: GetMovieUseCase) {}

  @Get("/:title")
  async find(@Param("title") title: string) {
    const movie = await this.getMovieUseCase.execute({
      title
    })

    return FindMovieViewModel.toHTTP(movie)
  }
}
