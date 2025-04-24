// src/components/DeleteConfirmation.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../styles/styles';

interface DeleteConfirmationProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmation = ({ visible, onClose, onConfirm }: DeleteConfirmationProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Delete this task?</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonPrimary, { flex: 1, marginLeft: 8 }]}
              onPress={() => {
                onConfirm();
                onClose();
              }}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmation;
