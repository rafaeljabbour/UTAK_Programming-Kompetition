# FireRoute

Rafael Jabbour, Alina Khan, Lavneet Sidhu, and Daniel Rolfe

---

## Table of Contents
1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Key Features](#key-features)
4. [Technology Stack](#technology-stack)
5. [Repository Structure](#repository-structure)
6. [Installation & Setup](#installation--setup)
7. [Usage](#usage)
8. [How It Works](#how-it-works)
9. [Contributing](#contributing)
10. [Contact](#contact)

---

## Introduction
**FireRoute** is an intuitive and user-friendly application designed to guide individuals to safety during wildfires. It accomplishes this by dynamically calculating and providing optimal paths around blocked roads or fire-affected areas. The application empowers community-driven safety through real-time reporting of hazards while leveraging the power of **MapBox** for navigation and **MongoDB** for data storage.

---

## Project Overview
- **Problem Addressed**: During wildfires, standard routes can become inaccessible or unsafe due to fire damage. Civilians and first responders need updated, reliable route guidance.
- **Solution**: FireRoute integrates:
  - **MapBox**: For dynamic mapping and route calculations.
  - **MongoDB**: To store and sync real-time user-reported hazards (fires, blocked roads) and safe haven locations.
  - **React Native (Expo)** & **Web Interface**: A user-friendly front end allowing both civilians and responders to collaborate in real-time.

### Two User Types
1. **Civilians**:
   - Receive routes to the nearest Safe Haven.
   - Can report new fire locations or blocked roads.
2. **Responders**:
   - Can create, update, or remove Safe Havens.
   - Can mark roads as blocked or on fire.

### Damage Reporting Feature
- Users can submit real-time data on hazardous areas.
- The routing algorithm adjusts instantly to avoid these hazards.

---

## Key Features
1. **MapBox Integration**  
   - Displays maps, user location, and route lines.  
   - Dynamically recalculates paths to avoid reported hazards.

2. **MongoDB Storage**  
   - Stores user-reported hazards, blocked roads, and safe havens.  
   - Ensures data is shared and updated in real time across all users.

3. **Crowdsourced Reporting**  
   - Fire and hazard reports from the community enrich the data, leading to more accurate route calculations.

4. **Role-Based UI**  
   - **Civilian Mode**: Focused on quick navigation to safety and hazard reporting.  
   - **Responder Mode**: Allows safe haven management and marking of dangerous areas.

5. **Responsive Front End**  
   - Built using React Native (Expo) for mobile usage.  
   - Includes embedded web screens for advanced mapping interactions.

---

## Technology Stack
- **Front End**: React Native (Expo), JavaScript/TypeScript
- **Mapping & Routing**: MapBox API (MapBox GL JS, Directions API)
- **Backend**: Node.js/Express (for data handling and server logic)
- **Database**: MongoDB (Atlas or on-prem)
- **Additional Libraries**: 
  - [Turf.js](http://turfjs.org/) for geometric operations (buffering fire zones, intersections, etc.)

---

## Repository Structure

# UTAK_Programming-Kompetition

git clone https://github.com/rafaeljabbour/UTAK_Programming-Kompetition

cd to the project

Install dependencies using: npm install

Start the project using: npm start

Download Expo Go on the iOS or Google Play Store, and then scan the QR code

TEAM_5/FrontEnd contains all the files relating to the front end, including screens and components

Contains default react native expo app folders and files. Modified/added files include:
- index.tsx: Entry screen, which lets user join as citizen or responder.
- ScreenA.tsx: login screen for responders
- WebScreen.tsx: contains embedded website launched for citizen interface
- WebScreenResponders.tsx: contains embedded website launched for responders interface
- index.html implements the mapbox api and creates an interactive interface that users use to input desired destinations and combines fire locations and safe haven locations as uploaded from the user, other users and first aid responders. It uses MongoDB to upload all of the fire locations and safe haven locations to a database that synchronizes through the maps of all of the users. 



