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
