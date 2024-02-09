import { SceneGetRequest } from './sceneModel';

export interface FilmPostRequest {
  name: string;
  director: string;
  minutes: number;
}

export interface FilmGetResponse {
  id: number;
  name: string;
  director: string;
  minutes: number;
  scenes: SceneGetRequest[];
}
