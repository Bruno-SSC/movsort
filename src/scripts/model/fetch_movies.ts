const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRlNzAzZjBiZTk1ODcwMDE0N2MxYTM3ZDg0ODRkMCIsIm5iZiI6MTczMTA4Nzc2My4zMTc2NTY1LCJzdWIiOiI2MjlhYTAxNGE0NGQwOTUyNzZlYjA5YWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qaMthKyz051xoaRMK7GNzF-4mj_oKawzBVTUz4yelJI",
  },
};

interface Filters {
  adult: boolean;
  video: boolean;
  language: string;
  page: number;
  sort: string;
  genres: string;
  year: number;
}

function prepare_URL(filters: Filters): string {
  let url = "https://api.themoviedb.org/3/discover/movie?";

  if (filters.year) url += `primary_release_year=${filters.year}`;

  url += `include_adult=${filters.adult}&`;
  url += `include_video=${filters.video}&`;
  url += `language=${filters.language}&`;
  url += `page=${filters.page}&`;
  url += `with_genres=${filters.genres}&`;
  url += `sort_by=${filters.sort}`;
  return url;
}

export async function fetch_movies(): Promise<object[]> {
  const filters: Filters = {
    adult: false,
    video: true,
    language: "en-US",
    page: 1,
    sort: "popularity.desc",
    genres: "16",
    year: 2010,
  };

  const URL = prepare_URL(filters);
  const req = await fetch(URL, options);
  const json = await req.json();
  return json.results;
}
