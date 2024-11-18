import { hide_all_modals, update_modal_state } from "../model/opt_list";
import { Filters } from "../model/Filters";
import { toggle_modals, toggle_option } from "../view/opt_list";

const filters_inputs = Array.from(document.getElementsByClassName("filter__input"));
const genres = new Filters();
const years = new Filters();

filters_inputs.forEach((f) => {
  f.addEventListener("click", (e) => {
    e.stopPropagation();
    const target_input = e.target as HTMLElement;
    if (!target_input) return;
    let filter_div = target_input.parentNode as HTMLElement;
    let modal_box = filter_div.getElementsByClassName("filter__modal_box")[0];
    let modals = update_modal_state(modal_box.id);
    toggle_modals(modals);
  });
});

const app_el = document.getElementById("app") as HTMLElement;
app_el.addEventListener("click", (e) => {
  e.stopPropagation();
  const modals = hide_all_modals();
  toggle_modals(modals);
});

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

    for (let inc of genres.included) toggle_option("genre", inc, "included");
    for (let exc of genres.excluded) toggle_option("genre", exc, "excluded");
    for (let ign of genres.ignored) toggle_option("genre", ign, "ignored");
  });
});
