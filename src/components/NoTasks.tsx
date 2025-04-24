import React from 'react';
import { View, Text } from 'react-native';
import styles, { COLORS } from '../styles/styles';

const NoTasks = () => {
  return (
    <View style={styles.noTasksContainer}>
      <Text style={styles.noTasksText}>No tasks</Text>
      <View style={{ width: 120, height: 4, backgroundColor: COLORS.accent, marginTop: 8 }} />
    </View>
  );
};

export default NoTasks;
