import { getDataPopular } from "../../services/movie/get-data-movie-popular";
import { updateMovie } from "../reducers/movie/moviepopular";

export const getDataPopularAll = () => async (dispatch) => {
  return getDataPopular()
    .then((Response) => {
      const moviePopular = Response.data.data;
      // console.log(moviePopular, "token movie popular");
      dispatch(updateMovie(moviePopular));
    })
    .catch((err) => {});
};
