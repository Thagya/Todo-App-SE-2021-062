import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import styles, { COLORS } from '../styles/styles';
import { Task } from '../store/taskStore';

interface EditTaskProps {
  visible: boolean;
  onClose: () => void;
  onSave: (id: string, title: string, description: string) => void;
  task: Task | null;
}

const EditTask = ({ visible, onClose, onSave, task }: EditTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (task && title.trim() !== '') {
      onSave(task.id, title, description);
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
          <Text style={styles.modalTitle}>Edit Task</Text>

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
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditTask;
