export interface movie_object {
  id: number;
  title: string;
  overview: string;
  score: number;
  poster_path: string;
  release_date: string;
  genres_id: number[];
}

export interface option_state {
  [key: string]: "ignored" | "included" | "excluded";
}

export interface genre_object {
  name: string;
  id: number;
  state: "ignored" | "included" | "excluded";
}
