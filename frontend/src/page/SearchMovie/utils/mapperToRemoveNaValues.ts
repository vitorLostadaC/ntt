import { MovieSchema } from "../../../schemas/Movie.schema"

export const mapperToRemoveNaValues = ({
  actors,
  description,
  id,
  poster,
  rating,
  title
}: MovieSchema): MovieSchema => {
  return {
    id: id,
    actors: replaceNaValues(actors, "Atores"),
    description: replaceNaValues(description, "Atores"),
    poster: poster,
    rating: replaceNaValues(rating, "Avaliações"),
    title: replaceNaValues(title, "Titulo")
  }
}

const replaceNaValues = (variable: string, valueToReplace: string) => {
  return variable === "N/A" ? `${valueToReplace} indisponíveis` : variable
}
