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

    // TODO: this is where I stopped yesterday. Idea: should each options be an instanciated object with "toggle" method?
    const genre_options = Array.from(
      document.querySelectorAll("[data-option_type='genre']")
    );

    genre_options.forEach((o) => {
      o.addEventListener("click", async (e) => {
        e.stopPropagation();
        const target = e.target as HTMLElement;
        if (target) "target not found!";
        const genre_value = target.dataset.value;
        const genre_state = target.dataset.state;
        if (!genre_value) return "dataset not found";

        console.log(target)
      });
    });
  }

  toggle_modal(): void {
    this.view.toggle();
  }
}
