# BarcodeReader

A simple React Native barcode scanner app built with Expo.

This repository contains a solution for a weekly assignment 6 in the course "Web- and Hybrid Technologies in Mobile Programming" at Oulu University of Applied Sciences.

## Features

- 📷 Real-time barcode scanning
- 🔍 Supports multiple barcode formats (QR, EAN-13, Code128, etc.)
- 🔒 Camera permission handling
- 📱 Works on iOS and Android

## Tech Stack

- **React Native** with TypeScript
- **Expo** with expo-camera for barcode scanning

## Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

## Usage

1. Launch the app
2. Allow camera permissions when prompted
3. Point the camera at a barcode
4. The scanned data will be displayed on screen
5. Tap "SCAN AGAIN" to scan another barcode

## Project Structure

```
├── App.tsx                      # Main app component with permission handling
├── components/
│   └── BarcodeScanner.tsx      # Camera view and scanning logic
└── package.json
```

## Requirements

- Node.js
- Expo CLI
- iOS Simulator or Android Emulator (or physical device with Expo Go)
