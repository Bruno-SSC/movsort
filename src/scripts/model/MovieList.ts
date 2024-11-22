import { genre_object } from "../Utils/Interfaces";

export class MovieListModel {
  movies: { [key: string]: any }[] = [];

  constructor() {}

  async init(): Promise<void> {
    await this.fetch_movies();
  }

  async fetch_movies(genres: genre_object[] = []): Promise<void> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    };

    let url = "https://api.themoviedb.org/3/discover/movie?";
    if (genres.length > 0) url += "with_genres=";

    // TODO: handle the semicolon for multiple genres. Also, move this to a proper function because there will me more filters.
    genres.forEach((g, index) => {
      if (g.state === "included") {
        url += g.id;
        console.log(index);
      }
    });

    const res = await fetch(url, options);
    const json = await res.json();
    this.movies = json.results; // TODO: instead of just copying, iterate and create proper objects with typing.
  }
}

/* include_adult=false& include_video=false& language=en-US& page=1& sort_by=popularity.desc */
