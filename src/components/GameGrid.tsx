import React, { useEffect, useState } from "react";
import { url, key } from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  rating: number;
}

interface fetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${url}/games?key=${key}`);
        const gameData: fetchGamesResponse = await res.json();
        setGames(gameData.results);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
