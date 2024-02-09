import {} from 'react-native';
import { Button, Form, Label } from 'tamagui';
import { XStack } from 'tamagui';
import { Input } from 'tamagui';

const FormEdit = () => {
  return (
    <>
      <XStack alignItems="center" space="$2">
        <Label>name</Label>
        <Input flex={1} />
        <Button>submit</Button>
      </XStack>
    </>
  );
};
export default FormEdit;
