import { Module } from "@nestjs/common"
import { MovieModule } from "./infra/http/modules/movie/movie.module"
import { ProvidersModule } from "./infra/integrations/providers/providers.module"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [MovieModule, ProvidersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: []
})
export class AppModule {}
