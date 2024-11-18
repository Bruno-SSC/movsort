import { hide_all_modals, update_modal_state } from "../model/opt_list";
import { Filters } from "../model/Filters";
import { toggle_modals } from "../view/opt_list";

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
    const dataset_value = target.dataset.value;
    if (!dataset_value) return "dataset not found";

    
  });
});
