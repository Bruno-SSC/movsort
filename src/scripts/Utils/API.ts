import { genre_object } from "./Interfaces";

export class API {
  static options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  };

  static base_url: string = "https://api.themoviedb.org/3/discover/movie?";

  static async fetch_genres(): Promise<genre_object[]> {
    const URL = "https://api.themoviedb.org/3/genre/movie/list";
    const req = await fetch(URL, API.options);
    const json = await req.json();
    return json.genres;
  }

  static async fetch_movies(url: string = API.base_url): Promise<any[]> {
    const res = await fetch(url, API.options);
    const json = await res.json();
    return json.results;
  }

  static genres_to_str(genres: genre_object[]): string {
    let new_str: string = "with_genres=";

    const included: genre_object[] = genres.filter((g) => g.state === "included");
    included.forEach((g) => (new_str += g.id + ","));
    new_str = new_str.slice(0, new_str.length - 1); // removes the last semicolon

    return new_str;
  }

  static year_to_str(year: number): string {
    let new_str: string = "primary_release_year=" + year;
    return new_str;
  }
}
