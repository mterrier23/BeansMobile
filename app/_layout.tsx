import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      contentStyle: { 
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#eaeaea'
      }
    }}
  >
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="checkin" options={{ headerTitle: 'Check-in' }} />
    <Stack.Screen name="notes" options={{ headerTitle: 'Review' }} />
    </Stack>;
}

export default RootLayout;