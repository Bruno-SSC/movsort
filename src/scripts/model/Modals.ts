import { States } from "../Utils/Interfaces";

const modals: States = {};

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
