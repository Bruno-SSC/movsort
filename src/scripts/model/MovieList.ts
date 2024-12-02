import { genre_object, movie_object } from "../Utils/Interfaces";

export class MovieListModel {
  movies: movie_object[] = [];

  search_movie(id: number): movie_object {
    return this.movies.filter((m) => m.id == id)[0];
  }

  search_by_name(query: string): movie_object[] {
    let ranking_list: movie_object[] = [];
    query = query.toLocaleLowerCase();

    this.movies.forEach((movie, index) => {
      let subject_obj = { ...movie, score: 0 };

      const title = movie.title.toLocaleLowerCase();
      if (title.includes(query)) subject_obj.score += 1;

      for (let i = 0; i < Math.min(query.length, title.length); i++) {
        subject_obj.score += query[i] === title[i] ? 1 : -1;
      }

      ranking_list.push(subject_obj);
    });

    return this.sort_movies(ranking_list);
  }

  sort_movies(ranked: movie_object[]): movie_object[] {
    if (ranked.length <= 1) {
      return ranked;
    }

    const pivot: movie_object = ranked[ranked.length - 1];
    const smaller: movie_object[] = [];
    const larger: movie_object[] = [];

    for (let i = 0; i < ranked.length - 1; i++) {
      if (ranked[i].score < pivot.score) {
        smaller.push(ranked[i]);
      } else {
        larger.push(ranked[i]);
      }
    }

    return [...this.sort_movies(larger), pivot, ...this.sort_movies(smaller)];
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
