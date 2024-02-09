import { useMutation } from 'react-query';
import List from '~/components/list';
import { CharacterPostRequest } from '~/models/characterMode';
import { CardContent } from '~/models/types';
import { createCharacter } from '~/services/characterService';
import useAppStore from '~/store/store';

const CharacterList = () => {
  const data = useAppStore((state) => {
    const characters = state.characters;
    const cardContent: CardContent[] = state.characters.map((character) => ({
      id: character.id,
      title: `Name: ${character.name}`,
      subtitle: '',
    }));

    return { characters, cardContent };
  });

  const sceneId = useAppStore((state) => state.sceneId);
  const scenes = useAppStore((state) => state.scenes);
  const setScenes = useAppStore((state) => state.setScenes);

  const handleCreateCharacter = useMutation({
    mutationFn: (data: CharacterPostRequest) => createCharacter(data),
    onSuccess: (response) => {
      const data = response.data;
      const scene = scenes.find((scene) => scene.id === sceneId);
      if (scene?.characters) scene.characters = [...scene.characters, data];
      let newScenes = scenes;
      if (newScenes) newScenes = [...scenes, scene];
      setScenes([...newScenes]);
    },
  });

  const handleCharacterAdd = () => {};

  return (
    <>
      <List
        elements={data.cardContent}
        onPress={() => {}}
        noElementsMessage="there are no characters"
        onDeleteItem={() => {}}
      />
    </>
  );
};
export default CharacterList;
