import { Module } from "@nestjs/common"
import { MovieModule } from "./infra/http/modules/movie/movie.module"
import { ProvidersModule } from "./infra/integrations/providers/providers.module"

@Module({
  imports: [MovieModule, ProvidersModule],
  controllers: [],
  providers: []
})
export class AppModule {}
