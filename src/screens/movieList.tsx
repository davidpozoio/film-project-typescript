import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Card, H2, Paragraph, Text } from 'tamagui';
import { Container } from 'tamagui.config';
import List from '~/components/list';
import SpinnerFetching from '~/components/spinnerFetching';
import { FilmPostRequest } from '~/models/filmModel';
import { OverviewScreenNavigationProps } from '~/models/navigation';
import { CardContent } from '~/models/types';
import { createFilm, deleteFilm, getAllFilms } from '~/services/filmService';
import useAppStore from '~/store/store';

const MovieList = () => {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const { data, isLoading, isFetching } = useQuery(['films'], () =>
    getAllFilms().then(async (res) => {
      const films = res.data;
      const cardContent: CardContent[] = films.map((film) => ({
        id: film.id,
        title: `Name: ${film.name}`,
        subtitle: `Director: ${film.director}`,
      }));
      return { films, cardContent };
    })
  );
  const setScenes = useAppStore((state) => state.setScenes);
  const setFilmId = useAppStore((state) => state.setFilmId);

  const handleClick = (id: number) => {
    setScenes(data?.films?.find((film) => film.id === id)?.scenes || []);
    setFilmId(id);
    navigation.navigate('Scenes');
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: FilmPostRequest) => createFilm(data),
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
  const handleAddFilm = () => {
    console.log('film added');
    mutate({
      director: 'new director',
      name: 'first movie',
      minutes: 1000,
    });
  };

  const deleteItem = useMutation({
    mutationFn: (id: number) => deleteFilm(id),
    onSuccess: () => {
      console.log('deleted film');
      queryClient.refetchQueries();
    },
  });

  const handleDelete = (id: number) => {
    console.log(id);
    deleteItem.mutate(id);
  };

  return (
    <>
      {isLoading || (isFetching && <SpinnerFetching />)}
      <List
        elements={data?.cardContent || []}
        noElementsMessage={!isLoading ? 'there are no films' : ''}
        onPress={handleClick}
        onAddItem={handleAddFilm}
        onDeleteItem={handleDelete}
      />
    </>
  );
};
export default MovieList;
