import axios from 'axios';
import { environment } from '~/environment/config';
import { FilmGetResponse, FilmPostRequest } from '~/models/filmModel';

export function getAllFilms() {
  return axios.get<FilmGetResponse[]>(`${environment.HOST_BACK}/films`);
}

export function createFilm(film: FilmPostRequest) {
  return axios.post(`${environment.HOST_BACK}/films`, film);
}

export function deleteFilm(id: number) {
  return axios.delete<boolean>(`${environment.HOST_BACK}/films/${id}`);
}
