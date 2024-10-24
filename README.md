# ReactHire

ReactHire is a job listing web application built with React and Vite. It allows users to browse, filter, and view job postings interactively. This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that provides a fast development environment.
- **Tailwind CSS**: A utility-first CSS framework for designing custom UIs.
- **JSON Server**: A simple way to create a fake REST API for testing and development.
- **React Router**: For handling navigation within the app.
- **React Icons**: For including icons in the UI.

## Features

- **Browse Jobs**: View a list of available job postings with details.
- **Filter by Job Type**: Quickly filter jobs based on type (e.g., full-time, part-time).
- **Dynamic Job Listings**: Jobs are fetched from a JSON file and displayed in a user-friendly manner.
- **Interactive UI**: Users can expand job descriptions for more details.

## File Structure

Here is the file structure of the project:

Reacthire/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   ├── jobs.json
│   ├── main.jsx
├── .gitignore
├── eslint.config
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── Procfile
├── README.md
├── tailwind.config.js
└── vite.config.js


## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repo-url>

   cd Reacthire

   npm install

   npm run server

   npm run dev
