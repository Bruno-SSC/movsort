import { genre_object } from "../Utils/Interfaces";

export class GenreModalModel {
  genres: genre_object[] = [];

  async init() {
    const data: genre_object[] = await this.fetch_genres();
    this.genres = data;

    this.genres.forEach((genre) => {
      genre.state = "ignored";
    });
  }

  toggle_option(name: string): void {
    this.genres.forEach((genre) => {
      if (genre.name != name) return;

      if (genre.state === "ignored") {
        genre.state = "included";
        return;
      }

      if (genre.state === "included") {
        genre.state = "excluded";
        return;
      }

      if (genre.state === "excluded") {
        genre.state = "ignored";
        return;
      }
    });
  }

  async fetch_genres(): Promise<genre_object[]> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    };

    const URL = "https://api.themoviedb.org/3/genre/movie/list";
    const req = await fetch(URL, options);
    const json = await req.json();
    return json.genres;
  }
}
