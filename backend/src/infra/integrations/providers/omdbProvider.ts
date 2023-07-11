import axios, { AxiosInstance } from "axios"
import { MovieSchema } from "../schemas/movieSchema"
import { Injectable } from "@nestjs/common"
import { MovieRepository } from "src/modules/movie/repositories/movieRepository"

@Injectable()
export class OmbdProvider implements MovieRepository {
  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: "https://www.omdbapi.com/",
      params: {
        apikey: process.env.API_KEY
      }
    })
  }

  public async findByTitle(title: string): Promise<MovieSchema> {
    const movie = await this.api.get<MovieSchema>("", { params: { t: title } })

    return movie.data
  }
}
