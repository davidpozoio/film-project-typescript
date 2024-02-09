import { create } from 'zustand';
import { CharacterGetResponse } from '~/models/characterMode';
import { SceneGetRequest } from '~/models/sceneModel';

interface FilmStore {
  filmId: number | undefined;
  setFilmId: (id: number) => void;
}

interface SceneStore {
  sceneId: number | undefined;
  setSceneId: (id: number) => void;
  scenes: SceneGetRequest[];
  setScenes: (scenes: SceneGetRequest[]) => void;
}

interface CharacterStore {
  characters: CharacterGetResponse[];
  setCharacters: (characters: CharacterGetResponse[]) => void;
}

interface AppStore extends SceneStore, FilmStore, CharacterStore {}

const useAppStore = create<AppStore>((set) => ({
  scenes: [],
  setScenes: (scenes) => {
    set({ scenes });
  },
  filmId: undefined,
  setFilmId: (id) => {
    set({ filmId: id });
  },
  characters: [],
  setCharacters: (characters) => {
    set({ characters });
  },
  sceneId: undefined,
  setSceneId: (id: number) => {
    set({ sceneId: id });
  },
}));

export default useAppStore;
