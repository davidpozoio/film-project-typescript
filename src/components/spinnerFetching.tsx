import { Spinner, View, YStack } from 'tamagui';

const SpinnerFetching = () => {
  return (
    <View style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <YStack padding="$3" space="$4" alignItems="center">
        <Spinner size="large" color="$orange10" />
      </YStack>
    </View>
  );
};
export default SpinnerFetching;
