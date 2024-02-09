import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { Card, H2, Paragraph, Text } from 'tamagui';
import { Container } from 'tamagui.config';
import List from '~/components/list';
import { OverviewScreenNavigationProps } from '~/models/navigation';
import { ScenePostRequest } from '~/models/sceneModel';
import { CardContent } from '~/models/types';
import { createScene, deleteScene } from '~/services/sceneService';
import useAppStore from '~/store/store';

const SceneList = () => {
  const data = useAppStore((state) => {
    const scenes = state.scenes;
    const cardContent: CardContent[] | undefined = state.scenes.map((scene) => ({
      id: scene.id,
      title: `Name: ${scene.name}`,
      subtitle: `Duration: ${scene.minutes.toString()}`,
    }));
    return { scenes, cardContent };
  });
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const setCharacters = useAppStore((state) => state.setCharacters);
  const scenes = useAppStore((state) => state.scenes);
  const setScenes = useAppStore((state) => state.setScenes);
  const filmId = useAppStore((state) => state.filmId);
  const setSceneId = useAppStore((state) => state.setSceneId);

  const handleClick = (id: number) => {
    setCharacters(data.scenes.find((scene) => scene.id === id)?.characters || []);
    setSceneId(id);
    navigation.navigate('Characters');
  };
  const queryClient = useQueryClient();
  const handleCreateScene = useMutation({
    mutationFn: (data: ScenePostRequest) => createScene(data),
    onSuccess: (response) => {
      const data = response.data;
      data.characters = [];
      console.log(scenes);
      setScenes([...scenes, data]);
    },
  });

  const handleDeleteScene = useMutation({ mutationFn: (id: number) => deleteScene(id) });

  const handleAddItem = () => {
    console.log(filmId);
    handleCreateScene.mutate({
      name: 'new Note',
      minutes: 0,
      film: {
        id: filmId,
      },
    });
  };

  const handleDelete = (id: number) => {
    handleDeleteScene.mutate(id);
  };

  return (
    <>
      <List
        elements={data.cardContent}
        onPress={handleClick}
        noElementsMessage="there are no scenes"
        onAddItem={handleAddItem}
        onDeleteItem={handleDelete}
      />
    </>
  );
};
export default SceneList;
