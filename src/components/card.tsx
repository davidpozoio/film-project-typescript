import { H2, Paragraph, Card, Button, AlertDialog } from 'tamagui';
import { CardContent } from '~/models/types';
import AlertForm from './alertForm';

export interface CardProps extends CardContent {
  onPress: (id: number) => void;
  onDelete: (id: number) => void;
}

const CardFilm = ({ id, title, subtitle, onPress, onDelete }: CardProps) => {
  return (
    <Card onPress={() => onPress(id)}>
      <Card.Header>
        <H2> {title}</H2>
        <Paragraph> {subtitle}</Paragraph>
      </Card.Header>
      <AlertForm />
      <Button onPress={() => onDelete(id)}>delete</Button>
    </Card>
  );
};
export default CardFilm;
