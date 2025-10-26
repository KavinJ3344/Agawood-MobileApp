import './global.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from './kande/(auth)/welcome';

export default function App() {
  return (
    <SafeAreaProvider>
      <Welcome />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}