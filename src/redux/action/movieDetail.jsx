import { useParams } from "react-router-dom";
import { MovieDetail } from "../../services/movie/get-data-movie-details";
import { MoviesDetails } from "../reducers/movie/moviedetail";

export const getMovieDetail = (movieId) => async (dispatch) => {
  return MovieDetail(movieId)
    .then((Response) => {
      dispatch(MoviesDetails(Response.data.data));
      console.log(Response, "response ");
      //   dispatch(MovieId(movieId));
      //   const moviePopular = Response.data.data;
      // console.log(moviePopular, "token movie popular");
      //   dispatch(updateMovie(moviePopular));
    })
    .catch((err) => {});
};
