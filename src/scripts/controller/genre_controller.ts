import { Filters } from "../model/Filters";
import { Options } from "../model/Interfaces";
import { toggle_option } from "../view/opt_list";

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

    const all_states = Object.keys(genres);

    for (let index in all_states) {
      let state = all_states[index] as keyof Options;
      genres[state].forEach((value) => toggle_option(genres.type, value, state));
    }
  });
});
