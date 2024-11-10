import { Filters } from "../../interfaces";
import { fetch_movies } from "../model/fetch_movies";
import { create_movie_card } from "../view/movie_list";

const filters: Filters = {
  adult: false,
  video: true,
  language: "en-US",
  page: 1,
  sort: "popularity.desc",
  genres: "16",
  year: 2011,
};

const movie_list = await fetch_movies(filters);
movie_list.forEach((mov) => create_movie_card(mov));

