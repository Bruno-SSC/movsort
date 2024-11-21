import { Query } from "../model/Query";
import { update_movies } from "../view/movie_list";
import { fill_genre_list, fill_years_list } from "../view/opt_list";

fill_genre_list();
fill_years_list();

const start_query = new Query();
const movie_list = await start_query.fetch_movies();
update_movies(movie_list);
