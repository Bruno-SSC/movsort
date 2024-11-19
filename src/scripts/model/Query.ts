import { Filters } from "./Filters";

const genre_IDs = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export class Query {
  adult: boolean;
  video: boolean;
  language: string;
  page: number;
  sort: string;
  genres: string;
  year: number;

  constructor() {
    this.adult = false;
    this.video = true;
    this.language = "en-US";
    this.page = 1;
    this.sort = "popularity.desc";
    this.genres = "16";
    this.year = 2011;
  }

  update_genres(): void | string {
    const data = localStorage.getItem("genres");
    if (!data) return "data not found";
    const genres: Filters = JSON.parse(data);

    genres.included.forEach((value) => {
      for (let entry of genre_IDs) {
        if (entry.name.toLowerCase() === value.toLowerCase()) {
          this.genres += ", " + entry.id;
        }
      }
    });
  }

  build_URL(): string {
    let url = "https://api.themoviedb.org/3/discover/movie?";
    url += `primary_release_year=${this.year}`;
    url += `include_adult=${this.adult}&`;
    url += `include_video=${this.video}&`;
    url += `language=${this.language}&`;
    url += `page=${this.page}&`;
    url += `with_genres=${this.genres}&`;
    url += `sort_by=${this.sort}`;
    return url;
  }
}
