import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMovieDataPopularQuery } from "../../services/movie/get-data-movie-popular";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";
import { fetchDataMovie } from "../../services/movie/get-data-movie";
import { getDataPopularAll } from "../../redux/action/moviePupolar";
import { useDispatch, useSelector } from "react-redux";

export const SeAllMovie = () => {
  // const token = CookieStorage.get(CookieKeys.AuthToken);
  // const [data, setdata] = useState([]);
  // const navigate = useNavigate();

  // const getmovie = async () => {
  //   const datapopular = await fetchDataMovie(token);
  //   setdata(datapopular.data);
  // };

  // useEffect(() => {
  //   if (token) {
  //     getmovie();
  //   } else {
  //     navigate("/");
  //   }
  // }, [token]);

  // const { data } = useMovieDataPopularQuery({
  //   languange: "en-us",
  //   page: "PageNow",
  // });

  // const movie = data ? data.results : [];

  const dispatch = useDispatch();

  const getpopulatmovies = () => {
    dispatch(getDataPopularAll());
  };
  useEffect(() => {
    getpopulatmovies();
  }, []);

  const movies = useSelector((state) => state.movie.movies);

  return (
    <div className=" bg-black ">
      <div className="px-4 text-white">
        <h1 className="text-6xl font-semibold mb-4 text-center">POPULAR MOVIE</h1>
        <div className="grid grid-cols-4 gap-4">
          {movies.map((film) => (
            <div key={film.id} className="border rounded-md transition-transform transform hover:scale-105">
              <Link to={`/detail/${film.id}`}>
                <h1 className=" pl-2 pb-2 text-xl">{film.title}</h1>
                <img className="px-4 rounded-[1.5rem]" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}></img>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Release Date : {film.release_date}</h2>
                  <p>{film.overview}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
