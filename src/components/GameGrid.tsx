import React, { useEffect, useState } from "react";
import fetchGames from "../services/apiClient";

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
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const gameData = await fetchGames();
      setGames(gameData.results);
    };
    getGames();
  });

  return <div>GameGrid</div>;
};

export default GameGrid;
