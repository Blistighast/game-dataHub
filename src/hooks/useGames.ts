import { useEffect, useState } from "react";
import { url, key } from "../services/apiClient";

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
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      try {
        const res = await fetch(`${url}/games?key=${key}`, {
          signal: controller.signal,
        });
        const gameData: fetchGamesResponse = await res.json();
        setGames(gameData.results);
      } catch (err: any) {
        setError(err.message);
      }
      return () => controller.abort();
    };
    fetchGames();
  }, []);

  return { games, error };
};

export default useGames;
