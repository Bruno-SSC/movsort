export interface States {
  [key: string]: boolean;
}

export interface option_state {
  [key: string]: "ignored" | "included" | "excluded";
}

export interface genre_object {
  name: string;
  id: number;
}
