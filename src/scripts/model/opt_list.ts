interface States {
  [key: string]: boolean;
}

let open_modals: States = {};
let included_genres: string[] = [];
let included_years: string[] = [];

export const update_modal_state = (modal_id: string): States => {
  open_modals[modal_id] = !open_modals[modal_id];
  return open_modals;
};

export const toggle_option = (): void => {};


