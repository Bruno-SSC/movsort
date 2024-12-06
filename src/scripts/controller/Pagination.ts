import { PaginationView } from "../view/Pagination";

export class PaginationController {
  view: PaginationView = new PaginationView();

  init() {
    this.view.init();
  }
}
