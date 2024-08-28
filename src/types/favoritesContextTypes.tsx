export type favorites = Array<number>;

export interface favoritesContextType{
  favorites:favorites;
  setFavorites:React.Dispatch<React.SetStateAction<favorites>>;
}