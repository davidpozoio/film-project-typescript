import axios from 'axios';
import { environment } from '~/environment/config';
import { SceneGetRequest, ScenePostRequest, ScenePostResponse } from '~/models/sceneModel';

export function createScene(scene: ScenePostRequest) {
  return axios.post<SceneGetRequest>(`${environment.HOST_BACK}/scenes`, scene);
}

export function deleteScene(id: number) {
  return axios.delete<boolean>(`${environment.HOST_BACK}/scenes/${id}`);
}
