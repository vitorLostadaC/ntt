import { Module } from "@nestjs/common"
import { GetMovieUseCase } from "src/modules/movie/useCases/getMovieUseCase/getMovieUseCase"
import { ProvidersModule } from "src/infra/integrations/providers/providers.module"
import { MovieController } from "./movie.controller"

@Module({
  imports: [ProvidersModule],
  controllers: [MovieController],
  providers: [GetMovieUseCase]
})
export class MovieModule {}
