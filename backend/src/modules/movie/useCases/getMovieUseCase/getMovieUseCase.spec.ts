import { TitleNotFoundException } from "../../exception/TitleNotFound"
import { MovieRepositoryInMemory } from "../../repositories/movieRepositoryInMemory"
import { GetMovieUseCase } from "./getMovieUseCase"

let movieRepositoryInMemory: MovieRepositoryInMemory
let getMovieUseCase: GetMovieUseCase

describe("Get Movie", () => {
  beforeEach(() => {
    movieRepositoryInMemory = new MovieRepositoryInMemory()
    getMovieUseCase = new GetMovieUseCase(movieRepositoryInMemory)
  })

  it("Should be able to get Movie", async () => {
    const movie = await getMovieUseCase.execute({ title: "Homem" })

    expect(movie).toEqual(movieRepositoryInMemory.movies[0])
  })

  it("Should be able to throw error when not pass title", async () => {
    expect(
      async () => await getMovieUseCase.execute({ title: "" })
    ).rejects.toThrow(TitleNotFoundException)
  })
})
