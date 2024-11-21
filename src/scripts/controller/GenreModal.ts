import { GenreModalModel } from "../model/GenreModal";
import { GenreModalView } from "../view/GenreModal";

export class GenreModalController {
  modal: GenreModalModel;
  view: GenreModalView;

  constructor() {
    this.modal = new GenreModalModel();
    this.view = new GenreModalView();
  }

  async initialize(): Promise<void> {
    const genre_list = await this.modal.fetch_genres();
    this.view.render_options(genre_list);

    const genre_input = document.getElementById("genre_input") as HTMLElement;
    genre_input.addEventListener("click", () => {
      this.toggle_modal();
    });
  }

  toggle_modal(): void {
    this.view.toggle_modal();
  }
}
