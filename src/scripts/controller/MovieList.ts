import { MovieListModel } from "../model/MovieList";
import { genre_object } from "../Utils/Interfaces";
import { MovieListView } from "../view/MovieList";
import { EventManager } from "../Utils/EventManager";

export class MovieListController {
  model: MovieListModel;
  view: MovieListView;

  constructor() {
    this.model = new MovieListModel();
    this.view = new MovieListView();
  }

  async init() {
    await this.model.init();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));
    EventManager.create_event("genresUpdated", (genres) => this.update_movies(genres));
  }

  async update_movies(genres: genre_object[]) {
    await this.model.fetch_movies(genres);
    this.view.clean_movie_list();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));
  }
}
