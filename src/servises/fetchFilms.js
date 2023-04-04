import axios from 'axios';

export default class ApiThemoviedb {
  #KEY = '79054ab6d7c73d62d26a93a0f299cea4';
  #URL = 'https://api.themoviedb.org/3/';

  constructor() {
    this.API = axios.create({
      baseURL: this.#URL,
      header: {},
      params: {
        api_key: this.#KEY,
      },
    });

    this.configImages = null;
    this.listGenge = null;
  }

  // * OK
  async searchFilm({ nameFilms, controller, page = 1 } = {}) {
    const result = await this.API.get(`search/movie`, {
      params: {
        signal: controller.signal,
        query: nameFilms,
        page,
      },
    });

    return result?.data;
  }

  // * OK
  async fetchTrending({ controller, page = 1, time_window = 'day' } = {}) {
    const result = await this.API.get(`/trending/movie/${time_window}`, {
      params: {
        signal: controller.signal,
        page,
      },
    });

    return result?.data;
  }

  // * OK
  async fetchFullInformationFromFilm(movie_id, controller) {
    const result = await this.API.get(`/movie/${movie_id}`, {
      params: {
        signal: controller.signal,
      },
    });

    return result?.data;
  }

  // * OK
  async fetchCreditsFromFilm(movie_id, controller) {
    const result = await this.API.get(`/movie/${movie_id}/credits`, {
      params: {
        signal: controller.signal,
      },
    });
    return result?.data;
  }

  // * OK
  async fetchReviewsFromFilm(movie_id, controller) {
    const result = await this.API.get(`/movie/${movie_id}/reviews`, {
      params: {
        signal: controller.signal,
      },
    });
    return result?.data;
  }

  async getUrlImage(size) {
    // ! Документація саме так радить знаходити урл до зображенння
    // Тому не підставляю просто рядок

    const configurationImages = await this.getConfigurationImages();

    return `${configurationImages.base_url}${size}`;

    // console.log(configurationImages.poster_sizes);
    // return `${configurationImages.base_url}${configurationImages.poster_sizes[0]}${path}`;
    // return `${configurationImages.base_url}original${path}`;
  }

  // * Work from configuration Images
  async getConfigurationImages() {
    if (this.configImages) return this.configImages;

    this.configImages = await this.fetchConfiguration();

    return this.configImages;
  }

  async fetchConfiguration() {
    const result = await this.API.get('/configuration');
    return result?.data?.images;
  }

  getGendeText(genres) {
    const gendeText = genres.reduce((gendeText, element) => {
      return (gendeText += (gendeText === '' ? '' : ', ') + element.name);
    }, '');

    return gendeText;
  }
}
