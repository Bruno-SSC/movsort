import { States, Options } from "../model/Interfaces";

export const toggle_modals = (modals: States) => {
  Object.keys(modals).forEach((modal_id) => {
    let modal_box = document.getElementById(modal_id);
    if (!modal_box) return "modal not found";

    if (modals[modal_id]) {
      modal_box.classList.remove("filter__modal_box--hidden");
    } else {
      modal_box.classList.add("filter__modal_box--hidden");
    }
  });
};

//? it's very likely a recursive approach would fits good here. Not splitting the fn or making a huge nest of iterators.
export const toggle_options = (options: Options, type: string) => {
  const option_states = Object.keys(options[type]);

  option_states.forEach((state) => {
    const curr_type = options[type][state];

    curr_type.forEach((value) => {
      const selector: string = `[data-value="${value}"][data-option_type="${type}"]`;
      const option = document.querySelector(selector);
      if (!option) return "element not found";
      const base_class = "filter__modal_option";

      if (state === "included") {
        option.classList.add(base_class + "--included");
      }

      if (state === "excluded") {
        option.classList.add(base_class + "--excluded");
      }

      if (state === "neutral") {
        option.classList.remove(base_class + "--included");
        option.classList.remove(base_class + "--excluded");
      }
    });
  });
};
