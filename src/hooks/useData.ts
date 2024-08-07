import { useEffect, useState } from "react";
import { key, url } from "../services/apiClient";

interface fetchResponse<T> {
  count: number;
  results: T[];
}

interface QueryParam {
  genres: number | undefined;
  parent_platforms: number | undefined;
}

const useData = <T>(
  endpoint: string,
  queryParam?: QueryParam | any,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const queryParamFormatter = () => {
    let queryString = "";
    if (queryParam) {
      Object.keys(queryParam).map((key: string) => {
        const query = queryParam[key] ? `&${key}=${queryParam[key]}` : "";
        queryString = queryString + query;
      });
    }
    return queryString;
  };

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      const fetchGenres = async () => {
        // console.log(`${url}${endpoint}?key=${key}${queryParamFormatter()}`);
        try {
          const res = await fetch(
            `${url}${endpoint}?key=${key}${queryParamFormatter()}`,
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
