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
    const generic_list = await API.fetch_movies();
    this.model.movies = this.model.format_movies(generic_list);
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

      const generic_list = await API.fetch_movies(url);
      this.model.movies = this.model.format_movies(generic_list);
      this.update_movies();
    });

    EventManager.create_event("name_search", ({ query }) =>
      this.handle_name_search(query)
    );
  }

  handle_name_search(query: string) {
    if (query.length <= 0) {
      this.update_movies();
      return;
    }

    const results = this.model.search_by_name(query)[0];
    this.view.clean_movie_list();
    this.view.create_movie_card(results);
  }

  async update_movies() {
    this.view.clean_movie_list();
    this.model.movies.forEach((mov: any) => this.view.create_movie_card(mov));
  }
}
