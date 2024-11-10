// ! This is starting to become HIGHLY MESSED. You see where this is going for. 
// I think it's best to stop now and think about a different/more concise/centered way of doing this.
// functions should not call other functions within them like this.
// Maybe I should store the selected options somewhere locally and always gather them there as the only source.
// the view functions would only update the data THERE and not interact with each other.
// view fn -> updates data locally -> other function consumes it -> everything is controlled in controller.
// very likely I can use this same architecture in other parts.

const gather_options = () => {
  const options = Array.from(document.getElementsByClassName("filter__input"));

  options.forEach((opt) => {
    const filter = opt.parentNode as HTMLElement;
    let modal_box = filter.getElementsByClassName("filter__modal_box")[0];

    let selected_options = Array.from(
      modal_box.getElementsByClassName("filter__modal_option--included")
    );

    console.log(selected_options);
  });
};

const toggle_modal = (filter__input: Element): void => {
  const filter = filter__input.parentNode as HTMLElement;

  if (!filter) return;
  let modal_box = filter.getElementsByClassName("filter__modal_box")[0];

  const modal_classes = Array.from(modal_box.classList);
  let hidden = modal_classes.filter((c) => c == "filter__modal_box--hidden");

  if (hidden.length > 0) {
    modal_box.classList.remove("filter__modal_box--hidden");
  } else {
    modal_box.classList.add("filter__modal_box--hidden");
    gather_options();
  }
};

const close_modals = (filters: Element[]) => {
  filters.forEach((f) => {
    const filter = f.parentNode as HTMLElement;
    if (!filter) return;
    let modal_box = filter.getElementsByClassName("filter__modal_box")[0];
    const modal_classes = Array.from(modal_box.classList);
    let hidden = modal_classes.filter((c) => c == "filter__modal_box--hidden");
    if (hidden.length > 0) return;
    modal_box.classList.add("filter__modal_box--hidden");
  });

  gather_options();
};

const toggle_option = (option: Element): void => {
  const classes = Array.from(option.classList);
  const base_class = "filter__modal_option";

  if (classes.length <= 1) {
    option.classList.add(base_class + "--included");
    return;
  }

  classes.forEach((c) => {
    if (c === base_class + "--included") {
      option.classList.remove(base_class + "--included");
      option.classList.add(base_class + "--excluded");
    }

    if (c === base_class + "--excluded") {
      option.classList.remove(base_class + "--excluded");
    }
  });
};

const app_el = document.getElementById("app") as HTMLElement;
app_el.addEventListener("click", () => close_modals(filters));

const filters = Array.from(document.getElementsByClassName("filter__input"));
filters.forEach((f) => {
  f.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle_modal(f);
  });
});

const options = Array.from(document.getElementsByClassName("filter__modal_option"));
options.forEach((f) => {
  f.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle_option(f);
  });
});
