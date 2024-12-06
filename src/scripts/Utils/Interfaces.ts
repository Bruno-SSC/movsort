export interface movie_object {
  id: number;
  title: string;
  overview: string;
  score: number;
  poster_path: string;
  release_date: string;
  genres_id: number[];
}

export interface json_movies_res {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface option_state {
  [key: string]: "ignored" | "included" | "excluded";
}

export interface filter_event_data {
  year: number;
  genres: genre_object[];
  page: number;
}

export interface genre_object {
  name: string;
  id: number;
  state: "ignored" | "included" | "excluded";
}
