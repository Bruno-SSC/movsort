export interface States {
  [key: string]: boolean;
}

export interface Options {
  [key: string]: {
    included: string[];
    excluded: string[];
    neutral: string[];
  };
}
