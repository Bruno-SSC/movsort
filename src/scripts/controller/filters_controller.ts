import { Filters } from "../model/Filters";
import { Query } from "../model/Query";
import { clean_movie_list, update_movies } from "../view/movie_list";
import { toggle_option } from "../view/opt_list";

const genres = new Filters("genres");
const genre_options = Array.from(document.querySelectorAll("[data-option_type='genre']"));

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
    const query = new Query();
    query.update_genres();
    const movie_list = await query.fetch_movies();
    clean_movie_list();
    update_movies(movie_list);
  });
});

const year_input = document.getElementById("year_input");

if (year_input) {
  year_input.addEventListener("change", async (e) => {
    let target = e.target as HTMLInputElement;
    localStorage.setItem("query_year", target.value);
    const query = new Query();
    query.update_genres();
    query.update_year();
    const movie_list = await query.fetch_movies();
    clean_movie_list();
    update_movies(movie_list);
  });
}
