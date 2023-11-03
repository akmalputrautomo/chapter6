import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import http from "../../utils/http";
import Headers from "../../assets/component/navbar/Header";
import http3 from "../../utils/http3";
import { useEffect, useState } from "react";
import { CookieKeys, CookieStorage } from "../../utils/Cookies";
import { fetchDataMovieDetails } from "../../services/movie/get-data-movie-details";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../redux/action/movieDetail";

export default function PageSearch() {
  const movieId = useParams();
  console.log(movieId);
  // const [details, setdetails] = useState("");
  // const token = CookieStorage.get(CookieKeys.AuthToken);
  const dispatch = useDispatch();

  // const getmovie = async () => {
  //   const datapopular = await fetchDataMovieDetails(token, movieId);
  //   setdetails(datapopular.data);
  // };

  const Detail = useSelector((state) => state.detail.movies);
  console.log(Detail, "detail");

  const genres = Detail && Detail.genres && Detail.genres.map((gen) => gen.name).join(", ");
  const rate = Detail && Detail.vote_average && Detail.vote_average.toFixed(2);

  const data = () => {
    dispatch(getMovieDetail(movieId));
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="bg-black text-white">
      <Headers />
      <img className="h-[51.4rem] w-full opacity-20" src={`https://image.tmdb.org/t/p/original/${Detail.backdrop_path}`} />
      <div className="absolute top-0 w-[50%] h-full flex flex-col justify-center gap-4 pl-10 text-white">
        <h1 className="text-6xl font-bold ">{Detail.title}</h1>
        <p className="text-xl ">{Detail.overview}</p>
        <p className="text-xl">{genres}</p>
        <span className="text-xl flex gap-4 items-center">
          <i class="fa-sharp fa-solid fa-star text-yellow-300"></i>
          {rate}/10
        </span>
        <button className="bg-red-500 rounded-md block w-1/4 py-2 font-bold flex justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Trailer
        </button>
      </div>
    </div>
  );
}
