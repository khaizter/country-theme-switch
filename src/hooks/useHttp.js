import { useState, useEffect } from "react";
import axios from "axios";

const useHttp = (_request, fetchOnStart = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [canFetch, setCanFetch] = useState(fetchOnStart);
  const [request, setRequest] = useState(_request);

  useEffect(() => {
    if (!canFetch) {
      setCanFetch(true);
      return;
    }

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(request.url, { params: request.params });
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [request, canFetch]);

  return [data, isLoading, isError, setRequest];
};

export default useHttp;
