export interface States {
  [key: string]: boolean;
}

interface Options {
  [key: string]: {
    included: string[];
    excluded: string[];
  };
}

const modals: States = {};
const options: Options = {};

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

export const update_option_state = (type: string, value: string): Options => {
  if (!options[type]) {
    options[type] = { included: [], excluded: [] };
  }

  let included = options[type].included.findIndex((inc) => inc === value);
  let excluded = options[type].excluded.findIndex((inc) => inc === value);

  // not found in included or excluded
  if (included === -1 && excluded === -1) {
    options[type].included.push(value);
  }

  // found included, moved to excluded
  if (included >= 0) {
    options[type].included.splice(included, 1);
    options[type].excluded.push(value);
  }

  // found excluded, moved to none
  if (excluded >= 0) {
    options[type].excluded.splice(excluded, 1);
  }

  return options;
};
