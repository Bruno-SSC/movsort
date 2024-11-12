let open_modals: string[] = [];
let included_genres: string[] = [];
let included_years: string[] = [];

export const update_modal_list = (modal_id: string): string[] => {
  let hidden: boolean = open_modals.every((modal) => modal !== modal_id);

  if (hidden) {
    open_modals.push(modal_id);
    return open_modals;
  }

  // there is better array methods for this: https://www.w3schools.com/js/js_array_search.asp
  for (let i in open_modals) {
    if (open_modals[i] !== modal_id) continue;
    open_modals.splice(Number(i), 1);
  }

  return open_modals;
};

export const toggle_option = (): void => {};
