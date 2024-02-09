import { Button, Text } from 'tamagui';
import { Container } from 'tamagui.config';
import CardFilm from './card';
import { CardContent } from '~/models/types';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface ListProps {
  elements: CardContent[];
  noElementsMessage: string;
  onPress: (id: number) => void;
  onAddItem?: () => void;
  onDeleteItem: (id: number) => void;
}

const List = ({ elements, noElementsMessage, onPress, onAddItem, onDeleteItem }: ListProps) => {
  const handlePress = () => {
    if (onAddItem) onAddItem();
  };

  return (
    <ScrollView>
      <Container>
        {elements.length === 0 && <Text>{noElementsMessage}</Text>}
        {elements.map((element, index) => {
          return (
            <CardFilm
              key={index}
              id={element.id}
              title={element.title}
              subtitle={element.subtitle}
              onPress={onPress}
              onDelete={onDeleteItem}
            />
          );
        })}
        <Button onPress={handlePress}>add</Button>
      </Container>
    </ScrollView>
  );
};
export default List;
