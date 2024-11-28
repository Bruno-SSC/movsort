import { movie_object } from "../Utils/Interfaces";

export class MovieListModel {
  movies: movie_object[] = [];

  search_movie(id: number): movie_object {
    return this.movies.filter((m) => m.id == id)[0];
  }

  search_by_name(query: string): movie_object[] {
    // ? think like this: you have a list of names and is trying to retrieve the most similar one or retrive all sorted by compatibility.
    const results: movie_object[] = [];

    this.movies.forEach((movie) => {
      let compatibility: number = 0;
      const { title } = { ...movie };

      for (let i = 0; i <= query.length - 1; i++) {
        const query_letter = query[i];
        const title_letter = title[i];
        compatibility += query_letter === title_letter ? 1 : -1;
      }

      // TODO: it should add all movies sorted by biggest compatibility, otherwise it makes no sense to check each letter
      if (compatibility >= query.length - 1) results.push(movie);
    });

    return results;
  }

  format_movies(generic_list: { [key: string]: any }[]): movie_object[] {
    const movies_list = generic_list.map((v) => {
      return {
        id: v.id,
        title: v.title,
        overview: v.overview,
        genres_id: v.genre_ids,
        score: v.vote_average,
        poster_path: v.poster_path,
        release_date: v.release_date,
      };
    });

    return movies_list;
  }
}
