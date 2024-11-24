import { filters_object, genre_object } from "../Utils/Interfaces";

export class MovieListModel {
  movies: { [key: string]: any }[] = [];
  active_filters: { [key: string]: any } = {};

  constructor() {}

  async init(): Promise<void> {
    await this.fetch_movies();
  }

  update_active_filters(data: { [key: string]: any }) {
    const keys = Object.keys(data);

    for (let k of keys) {
      this.active_filters[k] = data[k];
    }
  }

  async fetch_movies(): Promise<void> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    };

    let url = "https://api.themoviedb.org/3/discover/movie?";
    this.add_genres_url(url);
    const res = await fetch(url, options);
    const json = await res.json();
    this.movies = json.results; // TODO: instead of just copying, iterate and create proper objects with typing.
  }

  add_genres_url(url: string): string {
    const genres: genre_object[] = this.active_filters.genres;
    if (!genres) return url;

    url += "with_genres=";

    genres.forEach((g) => {
      if (g.state === "included") url += g.id + ",";
    });

    url = url.slice(0, url.length - 1);
    url += "&";
    console.log(url);
    return url;
  }
}
/* include_adult=false& include_video=false& language=en-US& page=1& sort_by=popularity.desc */
