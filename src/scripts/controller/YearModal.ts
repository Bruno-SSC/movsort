import { YearModalModel } from "../model/YearModal";
import { YearModalView } from "../view/YearModal";
import { EventManager } from "../Utils/EventManager";

export class YearModalController {
  private model: YearModalModel = new YearModalModel();
  private view: YearModalView = new YearModalView();

  init() {
    this.model.init();
    this.view.init();

    const year_input = document.getElementById("year_input") as HTMLElement;
    year_input.addEventListener("click", () => this.handle_input_click());

    this.view.element.addEventListener("click", (e) => {
      this.handle_option_click(e);
    });
  }

  handle_input_click() {
    this.view.toggle_modal();
  }

  handle_option_click(e: Event) {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    if (target.dataset.value === undefined) {
      throw new Error("Dataset value is missing!");
    }

    this.model.change_year(Number(target.dataset.value));
    this.view.toggle_option(target.dataset.value);
    this.view.clean_nonselected(target.dataset.value);
    //EventManager.emit("filter_update", this.model.year);
  }
}
