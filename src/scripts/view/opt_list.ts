export const hide_modal = (modal_ID: string) => {
  let modal_box = document.getElementById(modal_ID);
  if (!modal_box) return "modal not found";
  modal_box.classList.add("filter__modal_box--hidden");
};

export const show_modal = (modal_ID: string) => {
  let modal_box = document.getElementById(modal_ID);
  if (!modal_box) return "modal not found";
  modal_box.classList.remove("filter__modal_box--hidden");
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
