import "./styles/style.css";

import { GenreModalController } from "./scripts/controller/GenreModal";
import { MovieListController } from "./scripts/controller/MovieList";
import { YearModalController } from "./scripts/controller/YearModal";

const genre_modal_controller = new GenreModalController();
genre_modal_controller.init();

const year_modal_controller = new YearModalController();
year_modal_controller.init();

const movie_list_controller = new MovieListController();
movie_list_controller.init();
