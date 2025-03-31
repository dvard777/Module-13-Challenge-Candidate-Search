# Module 13 Challenge: Candidate Search

A React + TypeScript candidate search application built with Vite that leverages the GitHub API to fetch candidate data. Employers can review GitHub user profiles one candidate at a time, save potential candidates, and view the saved list on a separate page.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)


## Features

- **Candidate Search:**  
  - Fetches a batch of GitHub users using the GitHub API.
  - Displays one candidate at a time, including details like name, username, avatar, location, email, company, and a link to their GitHub profile.
  - Allows employers to accept (save) or reject a candidate.

- **Potential Candidates Page:**  
  - Lists all saved candidates in a responsive table.
  - Persist candidates in local storage so the data remains available after a page reload.

- **Navigation:**  
  - A navigation bar to switch between the Candidate Search and Potential Candidates pages.

- **Responsive Design:**  
  - Basic styling provided via CSS to mimic the challenge mock-ups.
  - Customize and extend styles as needed.

## Technologies

- **React** for building the user interface.
- **TypeScript** for type safety.
- **Vite** for fast development and bundling.
- **React Router** for client-side routing.
- **GitHub API** to retrieve candidate (user) data.

