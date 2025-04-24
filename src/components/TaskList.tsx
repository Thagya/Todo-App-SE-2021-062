import React from 'react';
import { FlatList, View } from 'react-native';
import { Task } from '../store/taskStore';
// Change the import path based on where TaskItem actually is
import TaskItem from './Taskitem';
import NoTasks from './NoTasks';
import styles from '../styles/styles';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onEditTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return <NoTasks />;
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      )}
      style={styles.taskList} // Use styles instead of inline styles
      contentContainerStyle={styles.flatListContent} // Use styles for contentContainerStyle
    />
  );
};

export default TaskList;
