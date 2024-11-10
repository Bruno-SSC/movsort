import "./styles/style.css";
import "./scripts/view/option_list";

import { Filters } from "./interfaces";
import { fetch_movies } from "./scripts/model/fetch_movies";
import { create_movie_card } from "./scripts/view/movie_list";

const update_movies = async () => {
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
};

update_movies();
