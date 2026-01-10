# 🔗 Shortify - Advanced URL Shortener
    
Shortify is a production-grade, full-stack URL shortener application that allows users to shorten long URLs, track click analytics in real-time, and manage their links through a secure dashboard.
  
Live Project Link: [url-shortener](https://glistening-youtiao-23fbf9.netlify.app/)

--------------------------------------------------------------------------------
## ✨ Features  
• User Authentication: Secure Registration and Login using JWT (JSON Web Tokens) and Spring Security.  
• URL Shortening: Convert long URLs into concise, shareable short links.  
• Dynamic Redirection: Seamlessly redirects users from short links to original URLs using path-based routing.  
• Analytics Dashboard: Visual bar charts displaying click performance over time (Date vs. Click Count).  
• Clipboard Integration: One-click copy functionality for generated short links.  
• Responsive Design: Fully responsive UI built with Tailwind CSS and Material UI.  
• Theme Customization: Custom gradients and animations using Framer Motion.  

--------------------------------------------------------------------------------
## 🛠️ Tech Stack  
### Backend (Server)  
• Language: Java 25  
• Framework: Spring Boot 4 (Spring Web, Spring Data JPA, Spring Security)  
• Database: PostgreSQL (Production via Neon DB)  
• Authentication: JWT (JSON Web Tokens)  
• Build Tool: Maven  
• Containerization: Docker  
### Frontend (Client)  
• Framework: React.js (Vite)  
• Styling: Tailwind CSS  
• State Management: React Context API & React Query (TanStack Query)  
• Forms: React Hook Form  
• Visualizations: Chart.js / React-Chartjs-2  
• HTTP Client: Axios  
• Notifications: React Hot Toast  
### Deployment  
• Frontend: Netlify  
• Backend: Render (Dockerized)  
• Database: Neon (Serverless Postgres)  

--------------------------------------------------------------------------------
## ⚙️ Architecture  
The application uses a decoupled architecture:  
1. The Backend exposes RESTful APIs to handle authentication, URL mapping, and analytics retrieval. It connects to a PostgreSQL database to store User, UrlMapping, and ClickEvent entities.  
2. The Frontend is a Single Page Application (SPA) that consumes these APIs. It handles routing locally via react-router-dom and manages global state (like the JWT token) using Context API.  

--------------------------------------------------------------------------------
## 🐳 Docker Support  
The project includes a Dockerfile for the backend service. To build and run the image locally:  
1. Build the image.  
2. Run the container (ensure environment variables are passed)..

--------------------------------------------------------------------------------
## 🛡️ Security Features  
• CSRF Protection: Configured in Spring Security to allow specific endpoints.  
• CORS Configuration: Restricted to allow requests only from the deployed frontend domain.  
• Password Encryption: User passwords are hashed using BCrypt before storage.  
• Private Routes: Frontend routes (like Dashboard) are protected by a PrivateRoute wrapper that checks for valid JWT tokens.  
