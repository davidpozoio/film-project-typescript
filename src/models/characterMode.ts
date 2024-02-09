export interface CharacterGetResponse {
  id: number;
  name: string;
}

export interface CharacterPostRequest {
  name: string;
  scene: {
    id: number | undefined;
  };
}
