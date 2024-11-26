import { API } from "../Utils/API";
import { genre_object } from "../Utils/Interfaces";

export class GenreModalModel {
  genres: genre_object[] = [];

  async init() {
    const data: genre_object[] = await API.fetch_genres();
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
}
