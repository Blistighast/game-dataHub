export const url = "https://api.rawg.io/api";
export const key = "5f5273ec9f834deb8b1424f8afd75067";

const fetchGames = async () => {
  const res = await fetch(url, {
    headers: {
      key,
    },
  });
  const gameData = await res.json();
  return gameData;
};

export default fetchGames;
