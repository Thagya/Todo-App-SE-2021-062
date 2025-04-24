// src/components/AddTask.tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import styles, { COLORS } from '../styles/styles';

interface AddTaskProps {
  visible: boolean;
  onClose: () => void;
  onAddTask: (title: string, description: string) => void;
}

const AddTask = ({ visible, onClose, onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (visible) {
      setTitle('');
      setDescription('');
    }
  }, [visible]);

  const handleAddTask = () => {
    if (title.trim() !== '') {
      onAddTask(title, description);
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Task</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title..."
              placeholderTextColor={COLORS.mainText}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textAreaInput}
              placeholder="About..."
              placeholderTextColor={COLORS.mainText}
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonPrimary, { flex: 1, marginLeft: 8 }]}
              onPress={handleAddTask}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTask;
