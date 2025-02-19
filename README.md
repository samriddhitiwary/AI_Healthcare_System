## Project Documentation

### Table of Contents
1. Introduction
2. Key Features
   - Feature 1: Doctor-Patient Appointment Booking and Management
   - Feature 2: Real-Time Health Monitoring and Record Keeping
   - Feature 3: GPS Integration for Nearby Hospitals
   - Feature 4: Calories Tracking and Alerts
   - Feature 5: Firebase Google Authentication
   - Feature 6: Medical Symptom Assistance Chatbot
   - Feature 7: Widget for Easy Navigation
   - Feature 8: Video Consultations with Jitsi
   - Feature 9: Responsive Website
   - Feature 10: AI Blood Report Analysis
   - Feature 11: Email Reminders for Appointments
3. Technologies Used
4. Installation

### Introduction
A health app is a software program that can be used on a mobile device or desktop to process health-related data. The entire project is divided into a client-server architecture, and hence, two different projects have been created but checked into one Git repository:

- **frontend**
- **backend**

### Key Features

#### Doctor-Patient Appointment Booking and Management
[Explain how appointments can be booked, managed, and updated.]

#### Real-Time Health Monitoring and Record Keeping
[Describe health tracking features, including the use of graphs and record uploads.]

#### GPS Integration for Nearby Hospitals
[Detail the Google Maps API integration for finding nearby hospitals.]

#### Calories Tracking and Alerts
[Explain how users can track calories and receive alerts.]

#### Firebase Google Authentication
[Highlight the secure login implementation using Firebase.]

#### Medical Symptom Assistance Chatbot
[Describe the chatbot’s role and capabilities.]

#### Widget for Easy Navigation
[Outline how the widget simplifies the user experience.]

#### Video Consultations with Jitsi
[Explain the integration of video consultations using Jitsi.]

#### Responsive Website
[Describe how the UI adapts to different screen sizes.]

#### AI Blood Report Analysis
[Explain how AI is used to analyze uploaded blood reports and provide insights, potential diagnoses, and recommendations.]

#### Email Reminders for Appointments
[Describe how email reminders are sent to users regarding their upcoming appointments to ensure timely consultations.]

### Technologies Used
- React.js
- Firebase Authentication
- Google Maps API
- Jitsi (Video Consultations)
- Node.js (Backend)
- Express.js
- CSS/Tailwind CSS/Bootstrap
- AI-based Blood Report Analysis
- Nodemailer (For Email Notifications)

### Installation
In order to run the project locally, developers need to obtain the `.env` file, which contains sensitive information such as the Google Map API Key, database credentials, ChatGPT API key, etc.

#### Clone the repository:
```bash
git clone https://github.com/samriddhitiwary/AI_Healthcare_System.git
```
All the code will be cloned into the `AI_Healthcare_System` directory. The frontend code is checked into the `frontend` folder, and the backend code is checked into the `backend` folder.

#### Start the backend server
```bash
cd ./AI_Healthcare_System/backend
npm install
npm start
```
This will start the backend server on port 8000 by default. However, the port can be configured in the `.env` file.

#### Start the frontend server
```bash
cd ./AI_Healthcare_System/frontend
npm install
npm start
```
This will start the frontend server on port 3000 by default. However, the port can be configured in the `.env` file.
