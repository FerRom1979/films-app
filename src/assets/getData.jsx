import axios from "axios";
import { useEffect, useState } from "react";

export const GetData = () => {
  const [nameMovie, setNameMovie] = useState("");
  const [moviePopular, setMoviePopular] = useState();
  const [apiError, setApiError] = useState(false);
  const [apiErrorPopular, setapiErrorPopular] = useState(false);
  const [infoMovie, setInfoMovie] = useState({
    backdropPath: "",
    originalLanguage: "",
    originaTitle: "",
    overview: "",
    popularity: 0,
    releaseDate: "",
    voteAverage: 0,
    voteCount: 0,
  });

  const URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";
  const URL_SEARCH = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE_API_KEY;
  /* get name movie */
  const callback = (nameMovie) => {
    setNameMovie(nameMovie);
  };

  /* call api popular */

  const searchMovie = async () => {
    try {
      /* mas populares */
      const res = await axios(
        `${URL_POPULAR}?api_key=${API_KEY}&language=en-US&page=1`
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
          `${URL_SEARCH}?api_key=${API_KEY}&query=${nameMovie}`
        );
        const {
          backdrop_path,
          original_language,
          original_title,
          overview,
          popularity,
          release_date,
          vote_average,
          vote_count,
        } = res.data.results[0];
        setInfoMovie({
          backdropPath: backdrop_path,
          originalLanguage: original_language,
          originaTitle: original_title,
          overview: overview,
          popularity: popularity,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        });
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
    apiError,
    apiErrorPopular,
  };
};
