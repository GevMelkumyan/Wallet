import axios from "axios";
import { useCallback, useEffect, useState } from "react";

/**
 * @param {string} url
 * @param {import("axios").AxiosRequestConfig} options
 */
export function useAxios(url, options, deps = []) {
  /**
   * @type {[unknown, React.Dispatch<unknown>]} state
   */
  const [data, setData] = useState(null);
  /**
   * @type {[import("axios").AxiosError | undefined, React.Dispatch<import("axios").AxiosError | undefined>]} state
   */
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios(url, options);

      setData(data);
    } catch (_error) {
      setError(_error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...deps]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
}
