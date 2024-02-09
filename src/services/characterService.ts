import axios from 'axios';
import { environment } from '~/environment/config';
import { CharacterGetResponse, CharacterPostRequest } from '~/models/characterMode';

export function createCharacter(character: CharacterPostRequest) {
  return axios.post<CharacterGetResponse>(`${environment.HOST_BACK}/characters`, character);
}
