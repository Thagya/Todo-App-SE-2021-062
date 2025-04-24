import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles, { COLORS } from '../styles/styles';
import { Task } from '../store/taskStore';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onEditTask }: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.rowContainer}>
        <Text
          style={[
            styles.taskTitle,
            task.completed && styles.completedTask,
          ]}
        >
          {task.title}
        </Text>
        <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
          <Text style={{ color: COLORS.accent, fontSize: 20 }}>×</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.taskDescription,
          task.completed && styles.completedTask,
        ]}
      >
        {task.description}
      </Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => onToggleComplete(task.id)}
        >
          <View
            style={[
              styles.checkbox,
              task.completed && styles.checkboxFilled,
            ]}
          >
            {task.completed && (
              <Text style={{ color: COLORS.mainText }}>✓</Text>
            )}
          </View>
          <Text style={{ color: COLORS.mainText }}>
            {task.completed ? 'Completed' : 'Mark as complete'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.taskActionButton}
          onPress={() => onEditTask(task)}
        >
          <Text style={styles.taskActionText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default TaskItem;
