# Node day 5 task - frontend

## Overview

This project implements a simple authentication system with "Login", "Register", and "Forgot Password" features using React, Axios for HTTP requests, and React Router for navigation. It also includes a gradient background for the page.

## Components

### App.js
The App component sets up the routes for the application. It uses React Router to define different paths and associate them with corresponding components.

### Home.js
The Home component is the landing page of the application. It provides links to the login and register pages.

### Register.js
The Register component handles user registration. It contains a form where users can input their email and password. Upon submission, it sends a POST request to the backend server to create a new user account.

### Login.js
The Login component handles user authentication. It contains a form where users can input their email and password. Upon submission, it sends a POST request to the backend server to authenticate the user.

### ForgotPassword.js
The ForgotPassword component handles password reset requests. It contains a form where users can input their email. Upon submission, it sends a POST request to the backend server to initiate the password reset process.

## Output

Netlify link=>https://frontend-day5-task-sri2403.netlify.app/

backend code=>[click here](https://github.com/sri2403/Backend-Day-5-Task.git)