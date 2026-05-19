# E-Commerce Product Listing App

A modern e-commerce product listing application built with React, TypeScript, Redux Toolkit, and Vite. The application supports product browsing, filtering, sorting, favorites management, infinite scrolling, error handling, skeleton loading states, and responsive UI.

---

## 🚀 Features

- Product listing page with dynamic product fetching
- Infinite scroll for seamless browsing experience
- Category filtering
- Rating-based filtering
- Sorting functionality
- Favorites management using Redux Toolkit
- Persistent favorites using Local Storage
- Skeleton loading UI while fetching products
- API error handling with retry functionality
- Responsive design
- Dark/Light theme support
- Unit testing using Vitest and React Testing Library

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- Redux Toolkit
- React Redux
- Radix UI Select
- Lucide React Icons

### State Management

- Redux Toolkit
- Async Thunks

### Styling

- CSS Modules / Component-based CSS
- Responsive Layouts

### Testing

- Vitest
- React Testing Library
- Jest DOM

---

## 📂 Project Structure

```bash
src/
│
├── api/                    # API layer
├── app/                    # Redux store configuration
├── components/             # Reusable UI components
│   ├── ErrorFallback/
│   ├── FiltersBar/
│   ├── ProductCard/
│   ├── ProductGrid/
│   └── Skeleton/
│
├── features/               # Redux slices and async logic
│   ├── favorites/
│   └── products/
│
├── hooks/                  # Custom hooks
├── pages/                  # Application pages
├── styles/                 # Global styles and fonts
├── tests/                  # Unit tests
└── utils/                  # Utility functions
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd ecommerce-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will run on:

```bash
http://localhost:5173
```

---

## 📦 Available Scripts

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `npm run dev`      | Starts development server     |
| `npm run build`    | Builds production application |
| `npm run preview`  | Runs production preview       |
| `npm run lint`     | Runs ESLint                   |
| `npm run test`     | Runs tests                    |
| `npm run coverage` | Generates test coverage       |

---

## 🧠 Core Functionalities

### Product Fetching

Products are fetched asynchronously using Redux Toolkit async thunks.

### Infinite Scroll

Custom infinite scroll hook automatically loads more products while scrolling.

### Filtering & Sorting

Users can:

- Filter by category
- Filter by rating
- Sort products dynamically

### Favorites System

Users can:

- Add products to favorites
- Remove products from favorites
- Persist favorites in Local Storage

### Error Handling

- Graceful API failure handling
- Retry mechanism for failed requests
- Error fallback UI

### Loading States

- Skeleton loaders improve perceived performance
- Smooth user experience during API requests

---

## 🧪 Testing

The project uses:

- Vitest
- React Testing Library
- Jest DOM

### Run Tests

```bash
npm run test
```

### Run Coverage

```bash
npm run coverage
```

---

## 🎨 UI Components

### Product Card

Displays:

- Product image
- Title
- Price
- Rating
- Favorite action

### Filters Bar

Provides:

- Category filter
- Rating filter
- Sorting controls

### Product Grid

Responsive grid layout for products.

### Skeleton Loader

Displays loading placeholders while fetching products.

---

## 🔄 State Management

Redux Toolkit is used for centralized state management.

### Product Slice

Handles:

- Product fetching
- Pagination
- Loading states
- API errors
- Filtering and sorting

### Favorites Slice

Handles:

- Favorite products
- Local storage synchronization

---

## 🌙 Theme Support

The application includes theme support using a custom hook.

Features:

- Dark mode
- Light mode
- Theme persistence

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile devices

---

## 📈 Performance Optimizations

Implemented optimizations include:

- Infinite scrolling
- Component-level separation
- Efficient Redux state updates
- Skeleton loaders for better UX
- Lazy rendering patterns

---

## 🔐 Error Boundary

React Error Boundary is used to prevent the entire application from crashing due to unexpected runtime errors.

---

## 📚 Utilities

### Utility Functions

- Currency formatting
- Local storage helpers

### Custom Hooks

- `useInfiniteScroll`
- `useTheme`
- Redux hooks

## 👨‍💻 Author

Mukesh S
