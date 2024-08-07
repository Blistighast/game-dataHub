import useData from "./useData";
import { GameQuery } from "./../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  rating: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (GameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    { genres: GameQuery.genre?.id, parent_platforms: GameQuery.platform?.id },
    [GameQuery]
  );
export default useGames;
