import { StyleSheet, Text, View } from 'react-native';

const CheckinScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-in</Text>
      <Text>Welcome to the check-in page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
});

export default CheckinScreen;
