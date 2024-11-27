export class MovieListView {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("movie_list") as HTMLElement;
  }

  create_movie_card(movie: any) {
    const poster_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const movie_card = `
        <div class="movie_card">
          <div class="movie_card__poster_wrapper">
            <img class="movie_card__poster_img" src="${poster_src}" alt="poster">
          </div>
          <h1 class="movie_card__title"> ${movie.title} </h1>
        </div>
      `;

    this.element.innerHTML += movie_card;
  }

  clean_movie_list() {
    const movie_list = Array.from(
      this.element.getElementsByClassName("movie_card") as HTMLCollectionOf<HTMLElement>
    );

    movie_list.forEach((card) => card.remove());
  }
}
