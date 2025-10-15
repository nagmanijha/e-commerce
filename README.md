🛍️ E-Commerce Platform - Frontend
This is the frontend for a modern, full-featured e-commerce application built with React. It provides a seamless shopping experience for users and a powerful dashboard for sellers to manage their products and orders.

✨ Features
User Features
Product Discovery: Browse all products, filter by category, and use a dynamic search bar.

Shopping Cart: Add, remove, and update item quantities in a persistent cart.

User Authentication: Secure login and registration for a personalized experience.

Order Management: View personal order history.

Responsive Design: Fully functional and beautiful on all devices, from mobile phones to desktops.

Seller Features
Secure Seller Login: Separate authentication for sellers.

Product Management: Easily add new products and view a list of all existing products.

Order Dashboard: View and manage incoming customer orders.

🚀 Tech Stack
Framework: React (v18+)

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

HTTP Client: Axios

State Management: React Context API

Notifications: React Hot Toast

📂 Project Structure
The project follows a feature-based modular structure to keep the codebase organized and scalable.

src/
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components (common, home)
├── context/        # Global state management using React Context
├── pages/          # Page-level components, divided by role
│   ├── seller/
│   └── user/
├── App.jsx         # Main application component and layout
├── index.css       # Global styles and Tailwind CSS imports
└── main.jsx        # Application entry point
🏁 Getting Started
Follow these instructions to get the project up and running on your local machine.

Prerequisites
Node.js (v18 or later recommended)

npm or a compatible package manager

Installation & Setup
Clone the repository:

Bash

git clone <your-repository-url>
cd <repository-folder>
Install dependencies:

Bash

npm install
Create an environment file:
Create a .env file in the root of the project by copying the example file:

Bash

cp .env.example .env
Configure environment variables:
Open the .env file and add the URL of your backend server.

Code snippet

VITE_BACKEND_URL="http://localhost:5000"
VITE_CURRENCY="$"
Run the development server:

Bash

npm run dev
The application will now be running on http://localhost:5173 (or another port if 5173 is busy).

📜 Available Scripts
npm run dev: Starts the development server with Hot Module Replacement.

npm run build: Bundles the app for production.

npm run preview: Serves the production build locally to preview it.
