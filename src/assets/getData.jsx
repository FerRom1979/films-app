import axios from "axios";
import { useEffect, useState } from "react";

export const GetData = () => {
  const [nameMovie, setNameMovie] = useState("");
  const [moviePopular, setMoviePopular] = useState();
  const [apiError, setApiError] = useState(false);
  const [apiErrorPopular, setapiErrorPopular] = useState(false);
  const [infoMovie, setInfoMovie] = useState();
  const [newNameMovie, setNewNameMovie] = useState(false);

  const URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";
  const URL_SEARCH = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE_API_KEY;
  /* get name movie */
  const callback = (nameMovie, checked) => {
    setNameMovie(nameMovie);
    setNewNameMovie(checked);
  };

  /* call api popular */

  const searchMovie = async () => {
    try {
      /* mas populares */
      const res = await axios(
        `${URL_POPULAR}?api_key=${API_KEY}&language=es-AR&page=1`
      );
      setMoviePopular(res.data.results);
      setApiError(false);
    } catch (error) {
      setapiErrorPopular(error);
    }
  };
  /* get movie */
  const getMovie = async (nameMovie) => {
    if (nameMovie !== "") {
      try {
        const res = await axios(
          `${URL_SEARCH}?api_key=${API_KEY}&query=${nameMovie}&language=es-AR`
        );

        setInfoMovie(res.data.results);
      } catch (error) {
        if (error) {
          setApiError(true);
        }
      }
      return;
    }
  };
  useEffect(() => {
    searchMovie();
    getMovie(nameMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameMovie]);

  return {
    callback,
    moviePopular,
    infoMovie,
    nameMovie,
    newNameMovie,
    apiError,
    apiErrorPopular,
  };
};
