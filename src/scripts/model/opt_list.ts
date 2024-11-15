import { States, Options } from "./Interfaces";

const modals: States = {};

const genre_options: Options = {
  included: [],
  excluded: [],
  neutral: [],
};

export const hide_all_modals = (): States => {
  Object.keys(modals).forEach((modal_id) => {
    modals[modal_id] = false;
  });

  return modals;
};

export const update_modal_state = (modal_id: string): States => {
  modals[modal_id] = !modals[modal_id];
  return modals;
};

export const update_genre_options = (value: string) => {
  type States = keyof Options;
  const option_states = Object.keys(genre_options) as States[];

  for (let index in option_states) {
    let state = option_states[index];
    let search: number = genre_options[state].findIndex((genre) => genre === value);

    if (search >= 0) {
      genre_options[state].splice(search, 1);
      let new_index = Number(index) + 1 >= option_states.length ? 0 : Number(index) + 1;
      let next_state = option_states[new_index];
      genre_options[next_state].push(value);
      break;
    }

    if (Number(index) >= option_states.length - 1) {
      genre_options["included"].push(value);
    }
  }

  console.log(genre_options);
};
