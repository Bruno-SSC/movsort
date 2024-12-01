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

    const results = this.quicksortIterative(ranking_list);
    //results.forEach((e) => console.log(e.score, e.title));

    return [];
  }

  quicksortIterative(array: { score: number }[]): { score: number }[] {
    let stack: [number, number][] = [[0, array.length - 1]]; // Stack to hold subarray bounds

    while (stack.length > 0) {
      const [start, end] = stack.pop()!;
      console.log(start,end)
      if (start >= end) continue; 

      // Partition the array
      const pivotIndex = this.partition(array, start, end);

      // Push the left and right subarrays onto the stack
      stack.push([start, pivotIndex - 1]); // Left subarray
      stack.push([pivotIndex + 1, end]); // Right subarray
    }

    return array;
  }

  partition(arr: { score: number }[], low: number, high: number): number {
    const pivot = arr[high].score; // Choose the last element as pivot
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j].score <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its final position
    return i + 1; // Return pivot index
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
