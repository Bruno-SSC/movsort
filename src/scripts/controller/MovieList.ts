import { MovieListModel } from "../model/MovieList";
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
    //EventManager.create_event("filter_update", (filters) => this.update_movies(filters));
  }

  async update_movies(filters = {}) {
    await this.model.fetch_movies();
    this.view.clean_movie_list();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));
  }
}
