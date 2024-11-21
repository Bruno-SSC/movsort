interface genre_item {
  name: string;
  id: number;
}

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

  render_options(option_list: genre_item[]) {
    option_list.forEach((genre) => {
      const new_item = document.createElement("li");
      new_item.dataset.option_type = "genre";
      new_item.dataset.value = genre.name;
      new_item.dataset.state = "ignored";
      new_item.classList.add("filter__modal_option");
      new_item.innerText = genre.name;
      new_item.addEventListener("click", (e) => this.toggle_option(e));
      this.element.appendChild(new_item);
    });
  }

  toggle_option(e: Event) {
    const target = e.target as HTMLElement;
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
}
