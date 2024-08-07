import { useEffect, useState } from "react";
import { key, url } from "../services/apiClient";

interface fetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, queryParam?: string, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      const fetchGenres = async () => {
        try {
          const res = await fetch(
            `${url}${endpoint}?key=${key}${
              queryParam ? `&genres=${queryParam}` : ""
            }`,
            {
              signal: controller.signal,
            }
          );
          const data: fetchResponse<T> = await res.json();
          setData(data.results);
          setLoading(false);
        } catch (e: any) {
          setError(e);
          setLoading(false);
        }
        return controller.abort();
      };

      fetchGenres();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
