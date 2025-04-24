import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTaskStore, Task } from '../store/taskStore';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import DeleteConfirmation from '../components/DeleteConfirmation';
import styles, { COLORS } from '../styles/styles';

const HomeScreen = () => {
  const { tasks, addTask, deleteTask, toggleComplete, editTask, loadTasks } = useTaskStore();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    loadTasks(); // Load tasks from storage or API
  }, []);

  // ✅ Handle Add
  const handleAdd = (title: string, description: string) => {
    addTask(title, description);
    setAddModalVisible(false); // Close add modal after adding
  };

  // ✅ Handle Edit Trigger
  const handleEdit = (task: Task) => {
    setSelectedTask(task);
    setEditModalVisible(true);
  };

  // ✅ Save Edited Task
  const handleSaveEdit = (id: string, title: string, description: string) => {
    editTask(id, title, description);
    setEditModalVisible(false); // Close edit modal after saving
    setSelectedTask(null);
  };

  // ✅ Handle Delete Trigger
  const handleDelete = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setSelectedTask(task);
      setDeleteModalVisible(true);
    }
  };

  // ✅ Confirm Delete
  const confirmDelete = () => {
    if (selectedTask) {
      deleteTask(selectedTask.id);
      setDeleteModalVisible(false); // Close delete modal after deletion
      setSelectedTask(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mainBackground }}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>
            {tasks.length === 0 ? 'No tasks yet' : 'Your Tasks'}
          </Text>
        </View>

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onDeleteTask={handleDelete}
          onEditTask={handleEdit}
        />

        {/* ✅ Message when no tasks */}
        {tasks.length === 0 && (
          <View style={styles.noTasksContainer}>
            <Text style={styles.noTasksText}>Start by adding your first task!</Text>
          </View>
        )}

        {/* Floating Add Button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={() => setAddModalVisible(true)}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>

        {/* Modals */}
        <AddTask
          visible={addModalVisible}
          onClose={() => setAddModalVisible(false)}
          onAddTask={handleAdd}
        />

        <EditTask
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          onSave={handleSaveEdit}
          task={selectedTask}
        />

        <DeleteConfirmation
          visible={deleteModalVisible}
          onClose={() => setDeleteModalVisible(false)}
          onConfirm={confirmDelete}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
