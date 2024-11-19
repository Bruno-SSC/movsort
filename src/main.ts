import "./styles/style.css";

import "./scripts/Utils/genre_IDs";

import "./scripts/controller/modals_controller";
import "./scripts/controller/filters_controller";

import "./scripts/view/movie_list";
import "./scripts/view/opt_list";

import { Query } from "./scripts/model/Query";
import { update_movies } from "./scripts/view/movie_list";
const start_query = new Query();
const movie_list = await start_query.fetch_movies();
update_movies(movie_list);
