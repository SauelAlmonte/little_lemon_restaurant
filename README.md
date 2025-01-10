# Little Lemon Restaurant - Reserve a Table Web App

Welcome to the Little Lemon Restaurant reserve-a-table web application! This project allows users to explore Little Lemon's offerings, view weekly specials, book a table, and more, all through a user-friendly and accessible interface.

---

## Table of Contents

- [Little Lemon Restaurant - Reserve a Table Web App](#little-lemon-restaurant---reserve-a-table-web-app)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Accessibility](#accessibility)
  - [Contributors](#contributors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Overview

Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. This web application serves as an online platform to provide:

- Seamless table reservation functionality.
- Details about the restaurant, including its menu and location.
- Testimonials from happy customers.
- An engaging, accessible, and user-friendly interface.

---

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Accessible Navigation**: Designed to meet WCAG standards with proper ARIA attributes and semantic HTML.
- **Table Booking**: Users can easily reserve a table by selecting a date, time, number of guests, and occasion.
- **Dynamic Booking Slots**: Real-time availability of booking slots.
- **Weekly Specials**: Showcase the restaurant's featured dishes of the week.
- **Testimonials Section**: Highlights reviews from satisfied customers.
- **Confirmation Modal**: Provides a clear confirmation of successful bookings.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS (with responsive design principles)
- **Routing**: React Router
- **Testing**: React Testing Library, Jest
- **API Integration**: Custom `fetchAPI` and `submitAPI` functions
- **State Management**: React Hooks (useState, useReducer, useEffect)
- **Accessibility Enhancements**: ARIA attributes, semantic HTML

---

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/little-lemon.git
   cd little-lemon

   ```

2. **Install Dependencies**:
   npm install

3. **Start the Development Server**:
   npm start

4. **Run Tests**:
   npm test

5. **Build the Application**:
   npm run build

## Accessibility

The Little Lemon reserve-a-table web app adheres to the following accessibility standards:

- Use of semantic HTML elements like `<header>`, `<main>`, and `<section>`.
- ARIA attributes such as `aria-label` and `aria-describedby` for enhanced screen reader compatibility.
- Keyboard navigation supported throughout the site.
- Error messages and interactive elements announced dynamically for screen readers.

For detailed guidelines, refer to [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).

---

## Contributors

- **Sauel Almonte** - Lead Developer
- **Collaborator's Name** - Designer
- **Collaborator's Name** - Accessibility Consultant

Feel free to contribute to the project by submitting issues or pull requests!

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the project under the terms of the license.

---

## Acknowledgments

- **React**: For the amazing library that powers the frontend.
- **Coursera**: For providing the capstone project template.
- **Inspiration**: To the real Little Lemon restaurant concept.

Thank you for exploring the Little Lemon Restaurant web application! 🍋
