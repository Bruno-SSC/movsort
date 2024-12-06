import { MovieListModel } from "../model/MovieList";
import { MovieListView } from "../view/MovieList";
import { EventManager } from "../Utils/EventManager";
import { API } from "../Utils/API";
import { ActiveFilters } from "../Utils/ActiveFilters";
import { filter_event_data, json_movies_res, movie_object } from "../Utils/Interfaces";

export class MovieListController {
  model: MovieListModel;
  view: MovieListView;

  constructor() {
    this.model = new MovieListModel();
    this.view = new MovieListView();
  }

  async init() {
    const json_list: json_movies_res = await API.fetch_movies();
    this.model.movies = this.model.format_movies(json_list.results);
    this.model.movies.forEach((mov: movie_object) => this.view.create_grid_card(mov));

    const icon_panel = document.getElementById("icon_panel") as HTMLElement;
    icon_panel.addEventListener("click", () => this.handle_layout_toggle());

    EventManager.create_event("filter_update", (data) => this.handle_filter_update(data));

    EventManager.create_event("name_search", ({ query }) =>
      this.handle_name_search(query)
    );
  }

  async handle_filter_update(data: filter_event_data) {
    if (data["year"]) {
      ActiveFilters.year = data.year;
    }

    if (data["genres"]) {
      ActiveFilters.genres = data.genres;
    }

    if (data["page"]) {
      ActiveFilters.page = data.page;
    }

    const genre_str: string = API.genres_to_str(ActiveFilters.genres);
    const year_str: string = API.year_to_str(ActiveFilters.year);
    const page_str: string = API.page_to_str(ActiveFilters.page);
    const params = [genre_str, year_str, page_str].join("&");
    const url = API.base_url + params;

    const json_list: json_movies_res = await API.fetch_movies(url);
    this.model.movies = this.model.format_movies(json_list.results);
    this.update_movies();
  }

  handle_layout_toggle() {
    this.view.toggle_layout();

    if (ActiveFilters.search_query != "") {
      this.handle_name_search(ActiveFilters.search_query);
      return;
    }

    this.update_movies();
  }

  handle_name_search(query: string) {
    const results = this.model.search_by_name(query);
    ActiveFilters.search_query = query;
    this.update_movies(results);
  }

  async update_movies(movies: movie_object[] = this.model.movies) {
    this.view.clean_movie_list();

    movies.forEach((mov: any) => {
      if (this.view.layout) this.view.create_grid_card(mov);
      else this.view.create_list_card(mov);
    });
  }
}
