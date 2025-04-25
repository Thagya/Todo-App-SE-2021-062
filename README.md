
# 📝 React Native To-Do List App (TypeScript)

## 📱 Project Description

This is a mobile **To-Do List Application** built using **React Native CLI** and **TypeScript**. It allows users to manage daily tasks with options to add, delete,edit and mark them as completed. The app uses **Zustand** for global state management and supports **AsyncStorage** for saving tasks locally.

The project is focused on clean code practices, modular component structure, and a UI inspired by **Material Design** principles.

---

## ✨ Features

- ➕ **Add Task** – Users can input and add new tasks to the list.
- ✅ **Mark Complete** – Tap a task to mark it as completed (with a strikethrough effect).
- ❌ **Delete Task** – Remove tasks from the list.
- **Edit Task**-Edit task from the list.
- 💾 **Persistent Storage** – Tasks are saved locally using AsyncStorage .

---
## Setup Instructions

Follow these steps to get the app running on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Node package manager comes bundled with Node.js.
- **Expo CLI**: (Optional if you're using Expo) 'npm install -g expo-cli'
- **React Native CLI**: Install React Native CLI globally (for running on devices/emulators):  
 
  npm install -g react-native-cli
  Android Studio / Xcode: For running the app on Android or iOS devices/emulators.

**For Android: Install Android Studio

**For iOS: Ensure you have Xcode installed from the App Store.

Steps to Run the App
Clone the Repository

**If you haven't already, clone the repository to your local machine:

git clone <repository_url>
cd <repository_folder>
Install Dependencies

**Inside the project folder, run the following command to install dependencies:

npm install
Run the App on Android/iOS

**After installing dependencies, you can run the app on an emulator or a physical device.

Android:
Ensure your Android device/emulator is connected and running.

**Run the following command:

npx react-native run-android
iOS (macOS only):
Ensure your iOS device or emulator is running.

**Run the following command:

npx react-native run-ios
Starting the Metro Bundler

Once the app starts, it will automatically open the Metro Bundler in your default browser. This is where you can see the logs and manage your app during development.

**To restart the bundler, you can use:

npm start
Optional: Persistence with AsyncStorage
If you want to store tasks persistently across app restarts, you can enable AsyncStorage. Here's how:

**Install AsyncStorage:

npm install @react-native-async-storage/async-storage
Follow the instructions in the AsyncStorage documentation to link the package and configure your app for persistence.

Available Commands
Start the app (runs the Metro Bundler and the app):

npm start
Run on Android:

npx react-native run-android
**Run on iOS (macOS only):

npx react-native run-ios
**Install dependencies:

npm install
Clean the build (useful if you encounter any issues):

npx react-native clean

**Troubleshooting**

**If the app isn't building or running, try cleaning the project and rebuilding:

npx react-native clean
npm install
npx react-native run-android
Make sure all required emulators (Android or iOS) are running before executing the run-android or run-ios commands.

**License**
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet

This **`README.md`** file contains all the necessary setup instructions for installing dependencies, running the app on Android/iOS, and using AsyncStorage for persistence. 

   Figma Link:https://www.figma.com/design/80zQJWkysmOCxj9Q1RMopa/to-do-app?node-id=0-1&m=dev&t=9C683iVrG0J2HU7R-1
   Vedio Link:https://github.com/user-attachments/assets/2af0606e-58f0-4afe-a41e-2de9f5f10307
   github repository link:https://github.com/Thagya/Todo-App-SE-2021-062.git

## 🗂 Folder Structure

```plaintext
ToDoListApp/
├── src/
│   ├── components/       # Reusable components like TaskItem, TaskInput
│   ├── navigation/            #navigate within different screens
│   ├── screens/        # Main app screens 
│   ├── store/          # Utility functions like AsyncStorage handlers and Zustand state 
                          management files
│   ├── styles/         # Centralized style definitions
│   └── assets/
                           # Root component
├── App.tsx  

