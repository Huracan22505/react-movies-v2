import { BaseApiService } from 'common/services/api.service';

class MoviesApiService extends BaseApiService {
  getMovies = async (page: number) => {
    const response = await this.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=cac5c08a938bff767b15f4beaa543e5a&page=${page}`,
    );
    const { results } = response.data;

    return results;
  };

  getMovieById = async ({ movieId }: { movieId: string }) => {
    const response = await this.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cac5c08a938bff767b15f4beaa543e5a&language=en-US`,
    );
    const { data } = response;

    return data;
  };
}

export const MoviesApi = new MoviesApiService();
