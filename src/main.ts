import "./styles/style.css";

import { GenreModalController } from "./scripts/controller/GenreModal";
import { MovieListController } from "./scripts/controller/MovieList";

const genre_modal_controller = new GenreModalController();
genre_modal_controller.initialize();

const movie_list_controller = new MovieListController();
movie_list_controller.initialize();
