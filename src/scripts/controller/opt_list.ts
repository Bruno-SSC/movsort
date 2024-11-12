import { toggle_option, update_modal_state } from "../model/opt_list";
import { hide_modal, show_modal } from "../view/opt_list";

const filters_inputs = Array.from(document.getElementsByClassName("filter__input"));

filters_inputs.forEach((f) => {
  f.addEventListener("click", (e) => {
    e.stopPropagation();
    const target_input = e.target as HTMLElement;
    if (!target_input) return;
    let filter_div = target_input.parentNode as HTMLElement;
    let modal_box = filter_div.getElementsByClassName("filter__modal_box")[0];
    let open_modals = update_modal_state(modal_box.id);

    Object.keys(open_modals).forEach((modal_id) => {
      if (open_modals[modal_id]) show_modal(modal_id);
      else hide_modal(modal_id);
    });
  });
});

const app_el = document.getElementById("app") as HTMLElement;
app_el.addEventListener("click", (e) => {
  e.stopPropagation();
});
