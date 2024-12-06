import { ActiveFilters } from "../Utils/ActiveFilters";
import { movie_object } from "../Utils/Interfaces";

export class MovieListView {
  element: HTMLElement;
  layout: boolean = true;

  constructor() {
    this.element = document.getElementById("movie_list") as HTMLElement;
  }

  create_grid_card(movie: movie_object) {
    const poster_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    let movie_card: string = `
      <div class="movie_card" data-movie_id="${movie.id}">
        <div class="movie_card__poster_wrapper">
          <img class="movie_card__poster_img" src="${poster_src}" alt="poster">
        </div>
        <h1 class="movie_card__title"> ${movie.title} </h1>
      </div>
      `;

    this.element.innerHTML += movie_card;
  }

  create_list_card(movie: movie_object) {
    const poster_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const genres = movie.genres_id.map((number) => {
      let genre_as_str: string;

      ActiveFilters.genres.forEach((genre) => {
        if (genre.id === number) {
          genre_as_str = genre.name;
        }
      });

      return genre_as_str!.toLocaleLowerCase();
    });

    let movie_card: string = `
    <div class="movie_card" data-movie_id="${movie.id}">
      <div class="movie_card__poster_wrapper">
        <img class="movie_card__poster_img" src="${poster_src}" alt="poster">
      </div>
      
      <div class="movie_card__text_info">
        <div class="movie_card__title_score">
          <h1> ${movie.title}  </h1>
          <span class="movie_card__score_number"> ${Math.round(movie.score)} </span>
        </div>

        <div class="movie_card__overview">
          <p> ${movie.overview} </p>  
        </div>
        
        <div class="movie_card__genres">
          <img src="/tag_blue.png" class="movie_card__tag_blue_icon">
          <p> ${genres.join(" - ")} </p>
        </div>
        
        <div class="movie_card__release_info" >
          <p class="movie_card__release_paragraph"> Release: </p>
          <p> ${movie.release_date} </p>
        </div>

      </div>
    </div>
    `;

    this.element.innerHTML += movie_card;
  }

  clean_movie_list() {
    const card_list = Array.from(
      this.element.getElementsByClassName("movie_card") as HTMLCollectionOf<HTMLElement>
    );

    card_list.forEach((card) => card.remove());
  }

  toggle_layout(): void {
    this.layout = !this.layout;
    const layout_btn = document.getElementById("layout_btn") as HTMLImageElement;

    if (this.layout) {
      this.element.classList.add("grid_layout");
      this.element.classList.remove("list_layout");
      layout_btn.src = "/grid.png";
    } else {
      this.element.classList.add("list_layout");
      this.element.classList.remove("grid_layout");
      layout_btn.src = "/list.png";
    }
  }

  
}
