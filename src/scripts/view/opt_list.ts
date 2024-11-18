import { States } from "../model/Interfaces";

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

export const toggle_option = (type: string, value: string, state: string) => {
  const selector: string = `[data-option_type="${type}"][data-value="${value}"]`;
  const option = document.querySelector(selector) as HTMLElement;

  if (!option) {
    console.log(option);
    return "element not found";
  }

  const base_class = "filter__modal_option";

  if (state === "included") {
    option.classList.add(base_class + "--included");
    option.dataset.state = "included";
  }

  if (state === "excluded") {
    option.classList.remove(base_class + "--included");
    option.classList.add(base_class + "--excluded");
    option.dataset.state = "excluded";
  }

  if (state === "ignored") {
    option.classList.remove(base_class + "--included");
    option.classList.remove(base_class + "--excluded");
    option.dataset.state = "ignored";
  }
};
