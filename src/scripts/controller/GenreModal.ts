import { GenreModalModel } from "../model/GenreModal";
import { GenreModalView } from "../view/GenreModal";

export class GenreModalController {
  modal: GenreModalModel;
  view: GenreModalView;

  constructor() {
    this.modal = new GenreModalModel();
    this.view = new GenreModalView();
  }

  async init(): Promise<void> {
    await this.modal.init(); // fetches the genres and stores it.
    this.view.render_options(this.modal.genres_list);

    const genre_input = document.getElementById("genre_input") as HTMLElement;
    genre_input.addEventListener("click", () => this.toggle_modal());

    // this event is triggered in the option but bubbles to the modal.
    this.view.element.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;

      // ? Not sure about this.
      // All the try-catch concepts of flow control and propagation seems like too much now.
      // What's the differenct with if-return?
      // It doesn't stop the code? 

      if (target.dataset.value === undefined) {
        throw new Error("Dataset value is missing!");
      }

      this.toggle_option(target.dataset.value);
    });
  }

  toggle_option(name: string) {
    this.modal.toggle_option(name);
    this.view.toggle_option(name);
  }

  toggle_modal(): void {
    this.view.toggle_modal();
  }
}
