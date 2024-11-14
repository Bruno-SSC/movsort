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

export const toggle_options = (options: Options) => {
  const types = Object.keys(options);
  const sample: any = {};

  let all_options = Array.from(
    document.getElementsByClassName(
      "filter__modal_option"
    ) as HTMLCollectionOf<HTMLElement>
  );

  types.forEach((t) => {
    sample[t] = all_options.filter((opt) => opt.dataset.option_type === t);
  });

  console.log(sample);
};

export const include_opt = (option: Element): void => {
  const base_class = "filter__modal_option";
  option.classList.add(base_class + "--included");
};

export const exclude_opt = (option: Element): void => {
  const base_class = "filter__modal_option";
  option.classList.remove(base_class + "--included");
  option.classList.add(base_class + "--excluded");
};
