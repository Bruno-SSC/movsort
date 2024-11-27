import { MovieListModel } from "../model/MovieList";
import { MovieListView } from "../view/MovieList";
import { EventManager } from "../Utils/EventManager";
import { API } from "../Utils/API";
import { ActiveFilters } from "../Utils/ActiveFilters";

export class MovieListController {
  model: MovieListModel;
  view: MovieListView;

  constructor() {
    this.model = new MovieListModel();
    this.view = new MovieListView();
  }

  async init() {
    // TODO: instead of just copying, iterate and create proper objects with typing.
    // do it even before returning the json.results or using a processing method from the model here to "build_genre_objects"?
    this.model.movies = await API.fetch_movies();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));

    EventManager.create_event("filter_update", async (data) => {
      if (data["year"]) {
        ActiveFilters.year = data.year;
      }

      if (data["genres"]) {
        ActiveFilters.genres = data.genres;
      }

      const genre_str: string = API.genres_to_str(ActiveFilters.genres);
      const year_str: string = API.year_to_str(ActiveFilters.year);
      const params = [genre_str, year_str].join("&");
      const url = API.base_url + params;

      this.model.movies = await API.fetch_movies(url);
      this.update_movies();
    });
  }

  async update_movies() {
    this.view.clean_movie_list();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));
  }
}
