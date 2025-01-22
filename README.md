```markdown
# FireRoute

**Created by**  
- **Rafael Jabbour**  
- **Alina Khan**  
- **Lavneet Sidhu**  
- **Daniel Rolfe**

---

## Table of Contents
1. [Introduction](#introduction)
2. [Achievements](#achievements)
3. [Project Overview](#project-overview)
4. [Key Features](#key-features)
5. [Tech Stack](#tech-stack)
6. [How It Works](#how-it-works)
7. [Project Structure](#project-structure)
8. [Installation & Usage](#installation--usage)
9. [Demo Links](#demo-links)
10. [License](#license)

---

## Introduction
**FireRoute** is an intuitive and user-friendly application designed to guide individuals to safety during wildfires. It intelligently navigates blocked or inaccessible routes caused by fire-related damage by leveraging **real-time, crowdsourced hazard reports**, the **MapBox** navigation API, **MongoDB**, and a **React Native** frontend.

---

## Achievements
We are thrilled to share that our team took **First Place** in the **Programming category** at the **University of Toronto Engineering Competitions (UTEK)**. This victory qualified us for the **Ontario Engineering Competition (OEC)**, where we will compete against top teams from universities across Ontario.

---

## Project Overview
During wildfires, roads can be blocked or rendered unsafe. **FireRoute** tackles this problem head-on:

- **Damage Reporting**: Users report blocked roads or hazardous areas in real time.
- **MapBox Integration**: FireRoute uses MapBox’s dynamic routing to provide the most efficient and safest paths to users.
- **MongoDB for Data**: A robust NoSQL database that stores all user-reported hazards, fires, and safe haven locations, ensuring data is accurate and up-to-date.

The application fosters community-driven safety by collecting and sharing real-time hazard information, then redirecting individuals along the safest possible routes. With a **React Native** interface, users can easily switch between “Citizen” (Civilian) or “Responder” roles to perform different actions, from reporting fires to setting up new safe havens.

---

## Key Features

1. **Damage Reporting Feature**
   - Users (civilians or responders) report blocked roads or unsafe conditions.
   - These reports instantly update the system’s routing logic.

2. **Real-Time Routing with MapBox**
   - Displays user location and route lines on a dynamic map.
   - Considers hazards and blocked roads to find the safest detour or route.

3. **MongoDB Integration**
   - Stores user-reported hazards, safe havens, and wildfires.
   - Updates route calculations in real time or near-real time.

4. **Role-Based Interaction**
   - **Civilian Mode**: Users see fire locations and are guided to the nearest safe haven. They can also report fires.
   - **Responder Mode**: Users can mark roads as blocked or on fire, create or update safe havens, and assist in rescue coordination.

5. **Community-Driven**
   - Crowdsourced data ensures that everyone benefits from the most recent and localized information.
   - Enhances collective safety and awareness.

---

## Tech Stack

- **Frontend**: React Native (Expo) and MapBox GL JS for mapping
- **Backend**: Node.js / Express
- **Database**: MongoDB (Atlas or a hosted instance)
- **Map & Routing**: MapBox Directions API & MapBox GL JS
- **Additional Libraries**: 
  - **Turf.js** for geometric calculations (e.g., buffering fires, intersection checks)

---

## How It Works

1. **User Chooses Role**
   - **Civilian**: Focus on receiving routes to safe havens; can report fires.
   - **Responder**: Create or update safe havens; mark blocked roads or fire zones.

2. **Reporting & Storage**
   - Users mark hazards or fire locations.
   - These reports are sent to a Node/Express backend, then stored in MongoDB.

3. **Routing**
   - FireRoute updates the routing logic in real time to avoid reported hazards.
   - MapBox calculates the safest, most efficient path.

4. **Live Updates**
   - Civilians see changes (e.g., newly blocked roads) as soon as they are reported.
   - Responders can coordinate and respond effectively with up-to-date info.

---

## Project Structure

Within the repository, you’ll find the following (main folders and files may vary based on your exact structure):

```bash
UTAK_Programming-Kompetition/
│
├── TEAM_5/
│   ├── FrontEnd/
│   │   ├── App.tsx
│   │   ├── index.tsx             # Entry screen; allows user to join as citizen or responder
│   │   ├── ScreenA.tsx           # Login screen for responders
│   │   ├── WebScreen.tsx         # Embedded website for citizen interface
│   │   ├── WebScreenResponders.tsx
│   │   │                         # Embedded website for responder interface
│   │   └── ... (other React Native/Expo files)
│   └── BackEnd/
│       ├── index.html            # Implements MapBox, handles user input for destinations
│       ├── routes.js / server.js # Node/Express logic (placeholder names)
│       └── ... (other backend logic files)
│
└── README.md                     # Project readme (you're reading it!)
```

**Note:**  
- `index.html` uses MapBox to create an interactive interface for adding fire locations, safe havens, and retrieving route data.  
- MongoDB stores all user input (fires, safe havens, blocked roads).  

---

## Installation & Usage

Below is a condensed guide for running the **FireRoute** project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rafaeljabbour/UTAK_Programming-Kompetition.git
   cd UTAK_Programming-Kompetition
   ```

2. **Install Dependencies**

   - **Frontend (React Native via Expo)**

     ```bash
     cd TEAM_5/FrontEnd
     npm install
     ```

   - **Backend (Node/Express)**

     ```bash
     # In a separate terminal or after installing the frontend
     cd TEAM_5/BackEnd
     npm install
     ```

3. **Set Environment Variables**

   - **`MONGO_URI`**: MongoDB connection string  
   - **MapBox Token**: If required on the server side, set `MAPBOX_TOKEN` or use `.env` files.

4. **Run the Backend**

   From `TEAM_5/BackEnd`:
   ```bash
   npm start
   # or
   node server.js
   ```

5. **Run the Frontend**

   From `TEAM_5/FrontEnd`:
   ```bash
   npm start
   ```

   - Install **Expo Go** on your mobile device (iOS or Android).
   - Scan the QR code displayed in your terminal or browser to open the app.

6. **Using FireRoute**

   - **Civilian Mode**:  
     - Access the app and choose “Citizen” mode.  
     - View fire locations, blocked roads, and get guided to the nearest safe haven.

   - **Responder Mode**:  
     - Log in through the “Responder” screen.  
     - Mark or remove safe havens, and block roads/fires as needed.

---

## Demo Links

**YouTube Demos**  
- [Core Features & Overview 1](https://youtube.com/shorts/Av_tdegBhqs?feature=share)  
- [Core Features & Overview 2](https://youtube.com/shorts/uSUFNATG4BE)

**GitHub Repository**  
- [FireRoute on GitHub](https://github.com/rafaeljabbour/UTAK_Programming-Kompetition)

---

## Special Thanks & Future
A huge thanks to the organizers of the **University of Toronto Engineering Competitions (UTEK)** and to all those who supported this initiative. We are excited to represent the University of Toronto at the **Ontario Engineering Competition (OEC)** and continue improving **FireRoute** to save lives and empower communities during emergency situations.

**Wish us luck at OEC!**
```
