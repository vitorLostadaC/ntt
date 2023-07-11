export interface SearchMovieSchema {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  setIsTyping: (value: boolean) => void
}
