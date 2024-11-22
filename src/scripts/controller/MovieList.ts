import { MovieListModel } from "../model/MovieList";
import { MovieListView } from "../view/MovieList";

export class MovieListController {
  model: MovieListModel;
  view: MovieListView;

  constructor() {
    this.model = new MovieListModel();
    this.view = new MovieListView();
  }

  async init() {
      // ! fix the any types here
    const movie_list = await this.model.fetch_movies();
    movie_list.forEach((mov: any) => this.view.create_movie_card(mov));
  }
}
