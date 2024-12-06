import { ActiveFilters } from "../Utils/ActiveFilters";
import { EventManager } from "../Utils/EventManager";

export class PaginationView {
  element: HTMLElement = document.getElementById("pagination") as HTMLElement;

  init() {
    this.element.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      EventManager.emit("filter_update", { page: Number(target.innerText) });
      // ActiveFilter.page has been updated above and is used below
      this.render_pagination(); //? temporary solution, I think.
    });

    this.render_pagination();
  }

  render_pagination(): void {
    this.element.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      if (i == ActiveFilters.page) {
        const pagination_number: string = `<p class="pagination__number pagination__number--active">${i}</p>`;
        this.element.innerHTML += pagination_number;
        continue;
      }

      const pagination_number: string = `<p class="pagination__number">${i}</p>`;
      this.element.innerHTML += pagination_number;
    }
  }
}
