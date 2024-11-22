import { genre_object, option_state } from "../Utils/Interfaces";

export class GenreModalModel {
  genres_list: genre_object[] = [];
  options: option_state = {};

  async init() {
    const data: genre_object[] = await this.fetch_genres();
    this.genres_list = data;

    this.genres_list.forEach((genre) => {
      this.options[genre.name] = "ignored";
    });
  }

  toggle_option(name: string): void {
    if (this.options[name] === "ignored") {
      this.options[name] = "included";
      return;
    }

    if (this.options[name] === "included") {
      this.options[name] = "excluded";
      return;
    }

    if (this.options[name] === "excluded") {
      this.options[name] = "ignored";
      return;
    }
  }

  async fetch_genres(): Promise<genre_object[]> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRlNzAzZjBiZTk1ODcwMDE0N2MxYTM3ZDg0ODRkMCIsIm5iZiI6MTczMTA4Nzc2My4zMTc2NTY1LCJzdWIiOiI2MjlhYTAxNGE0NGQwOTUyNzZlYjA5YWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qaMthKyz051xoaRMK7GNzF-4mj_oKawzBVTUz4yelJI",
      },
    };

    const URL = "https://api.themoviedb.org/3/genre/movie/list";

    const req = await fetch(URL, options);
    const json = await req.json();
    return json.genres;
  }
}
