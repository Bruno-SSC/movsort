export class YearModalView {
  element: HTMLElement = document.getElementById("year_modal") as HTMLElement;
  hidden: boolean = false;

  init() {
    this.render_options();
    //? any api call to know the range for years?
  }

  render_options() {
    for (let i = 2024; i > 1951; i--) {
      const new_item = document.createElement("li");
      new_item.dataset.option_type = "year";
      new_item.dataset.value = i.toString();
      new_item.dataset.state = "ignored";
      new_item.classList.add("filter__modal_option");
      new_item.innerText = i.toString();
      new_item.addEventListener("click", () => {}); // event to bubble up
      this.element.appendChild(new_item);
    }
  }

  toggle_modal() {
    this.hidden = !this.hidden;

    if (this.hidden) {
      this.element.classList.add("filter__modal_box--hidden");
    } else {
      this.element.classList.remove("filter__modal_box--hidden");
    }
  }

  clean_nonselected(value: string) {
    const selector: string = `[data-option_type="year"][data-state="included"]`;

    const targets = Array.from(
      document.querySelectorAll(selector) as NodeListOf<HTMLElement>
    );

    const base_class = "filter__modal_option";

    targets.forEach((year) => {
      if (year.dataset.value === value) return;
      year.dataset.state = "ignored";
      year.classList.remove(base_class + "--included");
    });
  }

  toggle_option(value: string) {
    const selector: string = `[data-option_type="year"][data-value="${value}"]`;
    const target = document.querySelector(selector) as HTMLElement;
    const state = target.dataset.state;
    const base_class = "filter__modal_option";

    if (state === "included") {
      target.classList.remove(base_class + "--included");
      target.dataset.state = "ignored";
      return;
    }

    if (state === "ignored") {
      target.classList.add(base_class + "--included");
      target.dataset.state = "included";
      return;
    }
  }
}
