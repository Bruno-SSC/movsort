import { genre_object } from "../Utils/Interfaces";

export class GenreModalView {
  element: HTMLElement;
  hidden: boolean = true;

  constructor() {
    this.element = document.getElementById("genre_modal") as HTMLElement;
  }

  toggle_modal(): void {
    this.hidden = !this.hidden;

    if (this.hidden) {
      this.element.classList.add("filter__modal_box--hidden");
    } else {
      this.element.classList.remove("filter__modal_box--hidden");
    }
  }

  render_options(option_list: genre_object[]) {
    option_list.forEach((genre) => {
      const new_item = document.createElement("li");
      new_item.dataset.option_type = "genre";
      new_item.dataset.value = genre.name;
      new_item.dataset.state = "ignored";
      new_item.classList.add("filter__modal_option");
      new_item.innerText = genre.name;
      this.element.appendChild(new_item);
    });
  }

  toggle_option(value: string) {
    const selector: string = `[data-option_type="genre"][data-value="${value}"]`;
    const target = document.querySelector(selector) as HTMLElement;
    const state = target.dataset.state;

    const base_class = "filter__modal_option";

    if (state === "ignored") {
      target.classList.add(base_class + "--included");
      target.dataset.state = "included";
      return;
    }

    if (state === "included") {
      target.classList.remove(base_class + "--included");
      target.classList.add(base_class + "--excluded");
      target.dataset.state = "excluded";
      return;
    }

    if (state === "excluded") {
      target.classList.remove(base_class + "--included");
      target.classList.remove(base_class + "--excluded");
      target.dataset.state = "ignored";
      return;
    }
  }

  show_active_genres(genres: genre_object[]) {
    const genre_placeholder = document.getElementById(
      "active_genres_placeholder"
    ) as HTMLElement;

    const counter = document.getElementById("active_genres_counter") as HTMLElement;
    const included = genres.filter((g) => g.state === "included");

    genre_placeholder.innerText = "Genres";
    counter.innerText = "";

    if (included.length <= 0) return;

    let textContent = included.map((inc) => inc.name).join(", ");
    genre_placeholder.innerText = textContent;

    counter.innerHTML = included.length.toString();
  }
}
