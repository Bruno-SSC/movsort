export const create_movie_card = (movie: any) => {
  const movie_list = document.getElementById("movie_list");
  const poster_src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const movie_card = `
      <div class="movie_card">
        <img class="movie_card__poster_img" src="${poster_src}" alt="poster">
      </div>
    `;

  if (movie_list) movie_list.innerHTML += movie_card;
};

export const clean_movie_list = () => {
  const movie_list = Array.from(
    document.getElementsByClassName("movie_card") as HTMLCollectionOf<HTMLElement>
  );

  movie_list.forEach((card) => card.remove());
};

export const update_movies = async (movie_list: object[]) => {
  movie_list.forEach((mov) => create_movie_card(mov));
};
