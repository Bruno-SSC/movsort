const year_input = document.getElementById("year_filter__input");

const toggle_year_modal = (): void => {
  const year__modal_box = document.getElementById("year_filter__modal_box");
  if (!year__modal_box) return;

  const modal_classes = Array.from(year__modal_box.classList);
  let hidden = modal_classes.filter((c) => c == "year_filter__modal_box--hidden");

  if (hidden.length > 0) {
    year__modal_box.classList.remove("year_filter__modal_box--hidden");
  } else year__modal_box.classList.add("year_filter__modal_box--hidden");
};

if (year_input) {
  year_input.addEventListener("focusin", toggle_year_modal);
  year_input.addEventListener("focusout", toggle_year_modal);
}
