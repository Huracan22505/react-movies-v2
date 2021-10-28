import { BaseApiService } from 'common/services/api.service';

class MoviesApiService extends BaseApiService {
  getMovies = async (query: string) => {
    const response = await this.get(
      `${this.API_HOST}/3/search/movie?query=${query}&api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false`,
    );

    const { results } = response.data;

    return results;
  };

  // getMovie = (id: number): Promise<AxiosResponse> => {
  //   return this.get(`${this.API_HOST}/${id}`);
  // };
}

export const MoviesApi = new MoviesApiService();
