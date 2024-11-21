import { Filters } from "../model/Filters";
import { Query } from "../model/Query";
import { clean_movie_list, update_movies } from "../view/movie_list";
import { toggle_option } from "../view/opt_list";

const genres = new Filters("genres");
const genre_options = Array.from(document.querySelectorAll("[data-option_type='genre']"));

const update_query = async () => {
  const query = new Query();
  const movie_list = await query.fetch_movies();
  clean_movie_list();
  update_movies(movie_list);
};

genre_options.forEach((o) => {
  o.addEventListener("click", async (e) => {
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
    update_query();
  });
});

const years = new Filters("years");
const year_options = Array.from(document.querySelectorAll("[data-option_type='year']"));

year_options.forEach((o) => {
  o.addEventListener("click", async (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target) "target not found!";
    const year_value = target.dataset.value;
    const year_state = target.dataset.state;
    if (!year_value) return "dataset not found";

    if (year_state === "ignored") years.include_value(year_value);
    if (year_state === "included") years.exclude_value(year_value);
    if (year_state === "excluded") years.ignore_value(year_value);

    years.included.forEach((value) => toggle_option("year", value, "included"));
    years.excluded.forEach((value) => toggle_option("year", value, "excluded"));
    years.ignored.forEach((value) => toggle_option("year", value, "ignored"));

    years.save();
    update_query();
  });
});
