import { States } from "../Utils/Interfaces";

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

export const fill_genre_list = () => {
  const genre_modal = document.getElementById("genre_modal");
  if (!genre_modal) return "genre modal not found";

  let data: string | null = localStorage.getItem("genre_IDs");
  if (!data) return "data for genre_IDs not found";

  let genre_IDs: { id: number; name: string }[] = JSON.parse(data);

  for (let genre of genre_IDs) {
    const new_item = document.createElement("li");
    new_item.dataset.option_type = "genre";
    new_item.dataset.value = genre.name;
    new_item.dataset.state = "ignored";
    new_item.classList.add("filter__modal_option");
    new_item.innerText = genre.name;
    genre_modal.appendChild(new_item);
  }
};

export const fill_years_list = () => {
  const year_modal = document.getElementById("year_modal");
  if (!year_modal) return "year modal not found";

  for (let i = 2024; i >= 1951; i--) {
    const new_item = document.createElement("li");
    new_item.dataset.option_type = "year";
    new_item.dataset.value = i.toString();
    new_item.dataset.state = "ignored";
    new_item.classList.add("filter__modal_option");
    new_item.innerText = i.toString();
    year_modal.appendChild(new_item);
  }
};
