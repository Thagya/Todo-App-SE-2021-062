import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  mainBackground: '#1B1A17',
  lightBackground: '#1F1E1B',
  mainText: '#F0E3CA',
  accent: '#FF8303',
  accentHover: '#A35709',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    padding: 16,
  },
  
  headerText: {
    color: COLORS.mainText,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  
  inputContainer: {
    backgroundColor: COLORS.lightBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.accent,
    marginBottom: 16,
    padding: 12,
  },
  
  input: {
    color: COLORS.mainText,
    fontSize: 16,
  },
  
  textAreaInput: {
    color: COLORS.mainText,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  
  buttonPrimary: {
    backgroundColor: COLORS.accent,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  
  buttonText: {
    color: COLORS.mainText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  taskItem: {
    backgroundColor: COLORS.lightBackground,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 12,
    marginBottom: 12,
  },
  
  taskTitle: {
    color: COLORS.mainText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  taskDescription: {
    color: COLORS.mainText,
    fontSize: 14,
    marginTop: 4,
  },
  
  completedTask: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  
  noTasksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  noTasksText: {
    color: COLORS.mainText,
    fontSize: 24,
    marginTop: 16,
    
  },
  
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: COLORS.accent,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  fabText: {
    fontSize: 24,
    color: COLORS.mainText,
  },
  
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  iconButton: {
    padding: 8,
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  modalContent: {
    width: width * 0.8,
    backgroundColor: COLORS.lightBackground,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  
  modalTitle: {
    color: COLORS.mainText,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.lightBackground,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  
  taskActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  taskActionText: {
    color: COLORS.accent,
    marginLeft: 4,
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  
  checkboxFilled: {
    backgroundColor: COLORS.accent,
  },
  
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
    marginBottom: 16,
  },

    taskList: {
      flex: 1,
    },
    flatListContent: {
      paddingBottom: 80,
    },
   
  taskItemContainer: {
      marginBottom: 16,
    },
  taskItemText: {
      fontSize: 16, 
      color: COLORS.mainText,
    },
    
    
  
});