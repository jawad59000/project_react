import { useEffect, useState } from "react";
const useFetch = (urlparams) => {
  const urls = `https://www.omdbapi.com/?${urlparams}&apikey=be4b9ffe`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(urls);
  }, [urlparams]);

  // console.log(data);
  return { data, error, isLoading };
};

export default useFetch;
