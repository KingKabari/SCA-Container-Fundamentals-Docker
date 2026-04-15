# Docker App

## Overview
This project demonstrates basic Docker container fundamentals by creating a simple Node.js application.

The application:
- Displays Hello World
- Includes a form that accepts user input
- Returns a response based on the input

---

## Project Structure
- index.js → Application source code  
- package.json → Dependencies  
- Dockerfile → Container configuration  

---

## How to Run

### 1. Build the Docker Image
docker build -t docker-task-app .

### 2. Run the Container
docker run -p 5000:5000 docker-task-app

### 3. Access the Application
Open your browser and go to:
http://localhost:5000

---

## Dockerfile Explanation

FROM node:18-alpine  
Uses a lightweight Node.js image as the base  

WORKDIR /app  
Sets the working directory inside the container  

COPY package*.json ./  
Copies dependency

## Notes
The container keeps running because it hosts a live server

Stop the container after testing using:

docker stop $(docker ps -q)

