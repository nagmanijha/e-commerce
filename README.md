🛍️ E-Commerce Platform - Frontend
This is the frontend for a modern, full-featured e-commerce application built with React. It provides a seamless shopping experience for users and a powerful dashboard for sellers to manage their products and orders.

✨ Features
User Features

* Product Discovery: Browse all products, filter by category, and use a dynamic search bar.
* Shopping Cart: Add, remove, and update item quantities in a persistent cart.
* User Authentication: Secure login and registration for a personalized experience.
* Order Management: View personal order history.
* Responsive Design: Fully functional and beautiful on all devices, from mobile phones to desktops.

Seller Features

* Secure Seller Login: Separate authentication for sellers.
* Product Management: Easily add new products and view a list of all existing products.
* Order Dashboard: View and manage incoming customer orders.

🚀 Tech Stack
Framework: React (v18+)
Build Tool: Vite
Styling: Tailwind CSS
Routing: React Router DOM
HTTP Client: Axios
State Management: React Context API
Notifications: React Hot Toast

📂 Project Structure
src/
├── assets/
├── components/
├── context/
├── pages/
│   ├── seller/
│   └── user/
├── App.jsx
├── index.css
└── main.jsx

🏁 Getting Started
Prerequisites

* Node.js (v18 or later recommended)
* npm or a compatible package manager

Installation & Setup
Clone the repository:

```bash
git clone <repo-url>
cd <repo-folder>
```

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Configure environment variables in `.env`:

```
VITE_BACKEND_URL="http://localhost:5000"
VITE_CURRENCY="$"
```

Run the development server:

```bash
npm run dev
```

The application will run on `http://localhost:5173` (or another port if 5173 is busy).

📜 Available Scripts

* `npm run dev`: Starts the development server with Hot Module Replacement.
* `npm run build`: Bundles the app for production.
* `npm run preview`: Serves the production build locally to preview it.
