# ReactHire

ReactHire is a job listing web application built with React and Vite. It allows users to browse, filter, and view job postings interactively. This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.
## Table of contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse job listings
- View job details
- Interactive user interface

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


## Setup Instructions/Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ZwingliCaleb/ReactHire.git

2. **change directory into project** :  
    ```bash
   cd Reacthire

3. **Install Dependencies** :
    ```bash
   npm install

4. **Start JSON Server for mock data** :
    ```bash
   npm run server

5. **In another terminal start React app** :
    ```bash
   npm run dev

## Usage

- **Navigate** through the app to view job postings.
- **Read more**; click on the buttons to see full job descriptions.
- **Filter**; this option helps you refine your job search.

