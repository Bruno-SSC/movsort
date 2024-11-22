export interface option_state {
  [key: string]: "ignored" | "included" | "excluded";
}

export interface genre_object {
  name: string;
  id: number;
  state: "ignored" | "included" | "excluded";
}
