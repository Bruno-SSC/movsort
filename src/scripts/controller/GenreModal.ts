import { GenreModalModel } from "../model/GenreModal";
import { GenreModalView } from "../view/GenreModal";
import { EventManager } from "../Utils/EventManager";

export class GenreModalController {
  model: GenreModalModel;
  view: GenreModalView;

  constructor() {
    this.model = new GenreModalModel();
    this.view = new GenreModalView();
  }

  async init(): Promise<void> {
    await this.model.init(); // fetches the genres and stores it.
    this.view.render_options(this.model.genres_list);

    const genre_input = document.getElementById("genre_input") as HTMLElement;
    genre_input.addEventListener("click", () => this.toggle_modal());

    this.view.element.addEventListener("click", (e) => {
      this.handle_option_click(e);
    });
  }

  handle_option_click(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    if (target.dataset.value === undefined) {
      throw new Error("Dataset value is missing!");
    }

    this.model.toggle_option(target.dataset.value);
    this.view.toggle_option(target.dataset.value);
    EventManager.emit("genresUpdated", this.model.genres_list);
  }

  toggle_modal(): void {
    this.view.toggle_modal();
  }
}
