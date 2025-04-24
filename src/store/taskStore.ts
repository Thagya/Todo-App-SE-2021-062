// src/store/taskStore.ts
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  editTask: (id: string, title: string, description: string) => void;
  loadTasks: () => Promise<void>;
}

const STORAGE_KEY = '@todo_tasks';

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],

  addTask: (title, description) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };

    const updatedTasks = [...get().tasks, newTask];
    set({ tasks: updatedTasks });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks)).catch((e) =>
      console.error('AddTask - Storage error:', e)
    );
  },

  deleteTask: (id) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    set({ tasks: updatedTasks });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks)).catch((e) =>
      console.error('DeleteTask - Storage error:', e)
    );
  },

  toggleComplete: (id) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    set({ tasks: updatedTasks });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks)).catch((e) =>
      console.error('ToggleComplete - Storage error:', e)
    );
  },

  editTask: (id, title, description) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    set({ tasks: updatedTasks });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks)).catch((e) =>
      console.error('EditTask - Storage error:', e)
    );
  },

  loadTasks: async () => {
    try {
      const tasksString = await AsyncStorage.getItem(STORAGE_KEY);
      if (tasksString) {
        const storedTasks: Task[] = JSON.parse(tasksString);
        set({ tasks: storedTasks });
      }
    } catch (error) {
      console.error('LoadTasks - Error loading tasks from AsyncStorage:', error);
    }
  },
}));
