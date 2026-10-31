# Swiggy Clone – React

A food delivery web application built using React, inspired by Swiggy. This project focuses on learning React fundamentals, working with live API data, and building reusable UI components.

## Features

- Fetch and display restaurant data using Swiggy's API.
- Search restaurants by name or cuisine.
- Filter restaurants based on search input.
- Display restaurant details such as ratings, cuisines, delivery time, and location.
- Reusable React components.
- Responsive restaurant card layout.

## Tech Stack

- **Frontend:** React.js, JavaScript (ES6+)
- **Styling:** CSS
- **API:** Swiggy Restaurant Listing API
- **Development Tools:** VS Code, Git, GitHub

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

*Note: Use `npm run dev` instead if your project is configured with Vite.*

## API Integration

Restaurant data is fetched from Swiggy's restaurant listing endpoint using a CORS proxy to handle browser cross-origin restrictions.

The application extracts restaurant information from the API response and dynamically renders the restaurant listings.

**Note:** This project depends on a third-party API and public CORS proxy. Their availability and response structure may change.

## Learning Objectives

- Understanding React components and props.
- Managing state using `useState`.
- Fetching API data using `fetch()` and `useEffect`.
- Handling asynchronous JavaScript.
- Implementing search and filtering functionality.
- Working with Git and GitHub.

## Future Improvements

- Restaurant pagination / infinite scrolling.
- Restaurant menu pages.
- Improved responsive design.
- Loading skeletons and error handling.
- Better API handling through a custom backend.

---

**Disclaimer:** This is an educational project created for learning purposes. It is not affiliated with or endorsed by Swiggy.
