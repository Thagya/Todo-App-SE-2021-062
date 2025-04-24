import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';


import { useTaskStore } from './src/store/taskStore';
import styles, { COLORS } from './src/styles/styles';

const App = () => {
  const { loadTasks } = useTaskStore();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mainBackground }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.mainBackground} />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;