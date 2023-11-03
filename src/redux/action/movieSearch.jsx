import { getDataPopular } from "../../services/movie/get-data-movie-popular";
import { getDataSearch } from "../../services/movie/get-data-movie-search";
import { SearchMovie } from "../reducers/movie/moviesearch";

export const getDataSearchMovie = (query) => async (dispatch) => {
  return getDataSearch(query)
    .then((Response) => {
      dispatch(SearchMovie(Response.data.data));
      console.log(getDataSearchMovie, "response search");
    })
    .catch((err) => {});
};
