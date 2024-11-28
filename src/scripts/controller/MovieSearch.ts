import { EventManager } from "../Utils/EventManager";
import { MovieSearchView } from "../view/MovieSearch";

export class MovieSearchController {
  view: MovieSearchView = new MovieSearchView();

  init() {
    const debounced_search = this.debounce((query: string) => {
      EventManager.emit("name_search", { query });
    }, 1000);

    this.view.element.addEventListener("input", (e: Event) => {
      const target = e.target as HTMLInputElement;
      const query = target.value;
      debounced_search(query);
    });
  }

  debounce(func: Function, delay: number): Function {
    let timeout: number;

    const debounced_fn = (...args: [Function, number]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };

    return debounced_fn;
  }
}
