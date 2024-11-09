import "./styles/style.css";
import "./scripts/view/option_list";

import { fetch_movies } from "./scripts/model/fetch_movies";
import { create_movie_card } from "./scripts/view/movie_list";

const movie_list = await fetch_movies();
movie_list.forEach((mov) => create_movie_card(mov));
