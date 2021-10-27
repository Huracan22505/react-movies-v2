import { BaseApiService } from 'common/services/api.service';

class MoviesApiService extends BaseApiService {
  getMovies = async (page: number) => {
    const response = await this.get(
      `${this.API_HOST}/3/trending/movie/day?api_key=${this.API_KEY}&page=${page}`,
    );
    const { results } = response.data;

    return results;
  };

  getMovieById = async ({ movieId }: { movieId: string }) => {
    const response = await this.get(
      `${this.API_HOST}/3/movie/${movieId}?api_key=${this.API_KEY}&language=en-US`,
    );
    const { data } = response;

    return data;
  };
}

export const MoviesApi = new MoviesApiService();
