import { Modal_states } from "../../interfaces";
import { hide_modal, show_modal, exclude_opt, include_opt } from "../view/option_list";

//? can I check this array to open the modals as well instead of directly changing them?
let visible_modals: string[] = [];

const filters = Array.from(document.getElementsByClassName("filter__input"));

// ! maybe it's better to start using IDs and add each event listeners manually.

// TODO: check all open modals and close/open the one I clicked based on his ID.
filters.forEach((f) => {
  f.addEventListener("click", (e) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (!target) return;

    //! Don't work, doesn't remove 😿
    for (let i in visible_modals) {
      let vm_name = visible_modals[i];
      if (vm_name === target.id) {
        hide_modal(f);
        visible_modals.splice(Number(i), 1);
        break;
      }
    }

    visible_modals.push(target.id);
    console.log(visible_modals);
  });
});

const app_el = document.getElementById("app") as HTMLElement;
app_el.addEventListener("click", () => {
  filters.forEach((f) => hide_modal(f));
});
