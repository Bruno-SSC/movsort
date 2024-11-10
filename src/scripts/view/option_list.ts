export const hide_modal = (filter__input: Element) => {
  const filter = filter__input.parentNode as HTMLElement;
  if (!filter) return;
  let modal_box = filter.getElementsByClassName("filter__modal_box")[0];
  modal_box.classList.add("filter__modal_box--hidden");
};

export const show_modal = (filter__input: Element) => {
  const filter = filter__input.parentNode as HTMLElement;
  if (!filter) return;
  let modal_box = filter.getElementsByClassName("filter__modal_box")[0];
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

// ! rewrite with "gather_included_genres" and such
export const gather_options = () => {
  const options = Array.from(document.getElementsByClassName("filter__input"));

  options.forEach((opt) => {
    const filter = opt.parentNode as HTMLElement;
    let modal_box = filter.getElementsByClassName("filter__modal_box")[0];

    let selected_options = Array.from(
      modal_box.getElementsByClassName("filter__modal_option--included")
    );

    console.log(selected_options);
  });
};
