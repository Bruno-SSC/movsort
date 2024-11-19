import { Query } from "../model/Query";
import { clean_movie_list, create_movie_card } from "../view/movie_list";
import { Filters } from "../model/Filters";
import { toggle_option } from "../view/opt_list";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRlNzAzZjBiZTk1ODcwMDE0N2MxYTM3ZDg0ODRkMCIsIm5iZiI6MTczMTA4Nzc2My4zMTc2NTY1LCJzdWIiOiI2MjlhYTAxNGE0NGQwOTUyNzZlYjA5YWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qaMthKyz051xoaRMK7GNzF-4mj_oKawzBVTUz4yelJI",
  },
};

const fetch_movies = async (): Promise<object[]> => {
  const query = new Query();
  query.update_genres();
  console.log(query.genres);
  const URL = query.build_URL();
  const req = await fetch(URL, options);
  const json = await req.json();
  return json.results;
};

const update_movies = async () => {
  const movie_list = await fetch_movies();
  clean_movie_list();
  movie_list.forEach((mov) => create_movie_card(mov));
};

const genres = new Filters("genre");
const genre_options = Array.from(document.querySelectorAll("[data-option_type='genre']"));

genre_options.forEach((o) => {
  o.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target) "target not found!";
    const genre_value = target.dataset.value;
    const genre_state = target.dataset.state;
    if (!genre_value) return "dataset not found";

    if (genre_state === "ignored") genres.include_value(genre_value);
    if (genre_state === "included") genres.exclude_value(genre_value);
    if (genre_state === "excluded") genres.ignore_value(genre_value);

    genres.included.forEach((value) => toggle_option("genre", value, "included"));
    genres.excluded.forEach((value) => toggle_option("genre", value, "excluded"));
    genres.ignored.forEach((value) => toggle_option("genre", value, "ignored"));

    genres.save();
    update_movies();
  });
});
