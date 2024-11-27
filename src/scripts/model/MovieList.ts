export class MovieListModel {
  movies: { [key: string]: any }[] = [];

  search_movie(id: string): any {
    return this.movies.filter((m) => m.id == id)[0];
  }
}

/* include_adult=false& include_video=false& language=en-US& page=1& sort_by=popularity.desc */
