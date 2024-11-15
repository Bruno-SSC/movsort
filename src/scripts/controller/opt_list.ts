import {
  hide_all_modals,
  update_modal_state,
  update_option_state,
} from "../model/opt_list";

import { toggle_modals, toggle_option } from "../view/opt_list";

const filters_inputs = Array.from(document.getElementsByClassName("filter__input"));

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

const options = Array.from(document.getElementsByClassName("filter__modal_option"));

options.forEach((o) => {
  o.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (target) "option not found!";

    const dataset_type = target.dataset.option_type;
    const dataset_value = target.dataset.value;
    if (!dataset_type || !dataset_value) return "type or value not found";
    const options = update_option_state(dataset_type, dataset_value);
    const option_types = Object.keys(options);

    option_types.forEach((type) => {
      options[type].included.forEach((value) => toggle_option(type, value, "included"));
      options[type].excluded.forEach((value) => toggle_option(type, value, "excluded"));
      options[type].neutral.forEach((value) => toggle_option(type, value, "neutral"));
    });
  });
});
