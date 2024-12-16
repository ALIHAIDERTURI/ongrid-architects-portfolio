# OnGrid-Architects Architecture Portfolio

This is a ReactJS-based portfolio website showcasing design projects and information about OnGrid-Architects. The project is built using Vite for development and bundling, with a modern and fast development experience.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [How to Run the Project](#how-to-run-the-project)
- [License](#license)

## Overview

The Ongrid-architects Architecture Portfolio is a personal project that highlights this Company Owner's design work and professional information. It features various pages, including a homepage, project showcase, contact page, AI-based section, and an about page. The website uses `react-router-dom` for navigation, and various components to manage routing and page content dynamically.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Vite**: The development tool that provides a fast and modern build experience.
- **React Router**: For client-side routing.
- **CSS**: For styling the components.
- **@vercel/speed-insights**: For performance insights integration (optional).
- **Other modern JavaScript libraries and tools**: Such as React Hooks for state and side-effect management.

## Installation

Follow the steps below to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone (https://github.com/ALIHAIDERTURI/ongrid-architects-portfolio.git)
   cd ongrid-architects-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Project Structure

Here's an overview of the project structure:

```
ongrid-architects-portfolio/
├── public/
│   ├── images/             # Image assets
│   ├── favicon.ico         # Favicon for the website
│   └── index.html          # The main HTML file
├── src/
│   ├── components/         # All reusable components (e.g., Header, Footer)
│   │   ├── Home/
│   │   ├── Project/
│   │   ├── Contact/
│   │   ├── Ai/
│   │   ├── ProjectsPage/
│   │   └── About/
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point for React
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # For web performance metrics (optional)
├── package.json            # Project configuration
└── vite.config.js          # Vite configuration file
```

## Features

- **Homepage**: Introduces the portfolio with links to other sections.
- **Project Pages**: Displays a showcase of selected design projects from 2010 to 2022.
- **Contact Page**: A section for visitors to get in touch.
- **AI Page**: A section demonstrating AI-related content.
- **About Page**: Information about onGird Architects and professional background.
- **Scroll-to-Top**: Smooth scrolling to the top of the page when navigating.
- **Responsive Design**: Optimized for mobile and desktop views.

## How to Run the Project

1. Ensure Node.js is installed. If not, download and install from [Node.js website](https://nodejs.org/).

2. Run the development server using:
   ```bash
   npm run dev
   ```

3. Navigate to the live website in your web browser at [https://ongrid-architects-portfolio.vercel.app](https://ongrid-architects-portfolio.vercel.app).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
