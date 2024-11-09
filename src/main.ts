import "./styles/style.css";

import { fetch_movies } from "./scripts/fetch_movies";

const show_movies = async () => {
  const movie_list = await fetch_movies();
  movie_list.forEach((mov) => create_movie_card(mov));
  console.log(movie_list);
};

const create_movie_card = (movie: any) => {
  const movie_list = document.getElementById("movie_list");
  const poster_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const movie_card = `
    <div class="movie_card">
      <img class="movie_card__poster_img" src="${poster_src}" alt="poster">
    </div>
  `;

  if (movie_list) movie_list.innerHTML += movie_card;
};

show_movies();
