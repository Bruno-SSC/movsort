import "./styles/style.css";

import { GenreModalController } from "./scripts/controller/GenreModal";
import { MovieListController } from "./scripts/controller/MovieList";

const genre_modal_controller = new GenreModalController();
genre_modal_controller.init();

const movie_list_controller = new MovieListController();
movie_list_controller.init();

genre_modal_controller.view.element.addEventListener("click", (e) => {
  genre_modal_controller.handle_option_click(e);
  const updated_genres = genre_modal_controller.model.genres_list;
  movie_list_controller.update_movies(updated_genres);
});
