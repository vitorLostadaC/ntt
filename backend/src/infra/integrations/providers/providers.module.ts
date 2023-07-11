import { Module } from "@nestjs/common"
import { MovieRepository } from "src/modules/movie/repositories/movieRepository"
import { OmbdProvider } from "./omdbProvider"

@Module({
  providers: [
    {
      provide: MovieRepository,
      useClass: OmbdProvider
    }
  ],
  exports: [MovieRepository]
})
export class ProvidersModule {}
