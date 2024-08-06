import { useEffect, useState } from "react";
import { key, url } from "../services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface fetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchGenres = async () => {
      try {
        const res = await fetch(`${url}/genres?key=${key}`, {
          signal: controller.signal,
        });
        const genreData: fetchGenreResponse = await res.json();
        setGenres(genreData.results);
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      }
      return controller.abort();
    };

    fetchGenres();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
