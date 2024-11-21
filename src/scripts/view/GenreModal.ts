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

  toggle(): void {
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
      this.element.appendChild(new_item);
    });
  }
}
