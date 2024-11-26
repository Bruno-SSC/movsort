export class MovieListModel {
  movies: { [key: string]: any }[] = [];

  constructor() {}

  async init(): Promise<void> {}
}

/* include_adult=false& include_video=false& language=en-US& page=1& sort_by=popularity.desc */
