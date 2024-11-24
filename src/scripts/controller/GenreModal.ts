import { GenreModalModel } from "../model/GenreModal";
import { GenreModalView } from "../view/GenreModal";
import { EventManager } from "../Utils/EventManager";

export class GenreModalController {
  private model: GenreModalModel = new GenreModalModel();
  private view: GenreModalView = new GenreModalView();

  async init(): Promise<void> {
    await this.model.init(); // fetches the genres and stores it.
    this.view.render_options(this.model.genres);

    const genre_input = document.getElementById("genre_input") as HTMLElement;
    genre_input.addEventListener("click", () => this.handle_input_click());

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
    EventManager.emit("filter_update", { genres: this.model.genres });
  }

  handle_input_click(): void {
    this.view.toggle_modal();
  }
}
