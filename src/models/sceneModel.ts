import { CharacterGetResponse } from './characterMode';

export interface ScenePostRequest {
  name: string;
  minutes: number;
  film: {
    id: number | undefined;
  };
}

export interface ScenePostResponse {
  id: number;
  name: string;
  minutes: number;
}

export interface SceneGetRequest {
  id: number;
  name: string;
  minutes: number;
  characters: CharacterGetResponse[];
}
