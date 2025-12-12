# Star Wars Wiki

## ⚠️ Disclaimer

This project was developed as part of a Web Programming midterm assignment. While the entire application architecture, React components, API integration, and core functionality were implemented without AI Assistence, certain portions requiring intensive Tailwind CSS styling and README.md specification were done with AI Assistence.But can confirm even those parts are implemented carefully.
The project demonstrates proficiency in:
- React fundamentals (components, hooks, state management)
- API integration and data handling
- Client-side routing
- Responsive design principles
- Modern frontend development practices


A Star Wars encyclopedia built with React + Vite and the Star Wars API (SWAPI). Explore films, characters, planets, and starships from the Star Wars universe.

## 🌟 Features

- **Films Gallery**: Browse all Star Wars movies with detailed information including episode numbers, release dates, opening crawls, and related content
- **Characters Database**: Explore  characters with physical attributes, personal information, and film appearances
- **Planets Explorer**: Discover distant worlds with climate, terrain, and population data
- **Starships Catalog**: View legendary ships with specifications, manufacturers, and classes
- **Real-time Search**: Filter content instantly across all sections
- **Pagination**: Smooth navigation through large datasets

## 🛠️ Technologies Used

- **React** (Vite) - Frontend framework with functional components and hooks
- **Tailwind CSS** - Utility-first CSS framework for styling
- **SWAPI** - Star Wars API for real-time data
- **Lucide React** - Icon library
- **Hash-based Routing** - Client-side navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd star-wars-wiki

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── Router.jsx           # Custom hash-based routing system
│   ├── Navigation.jsx       # Sticky navbar with active route highlighting
│   ├── Loading.jsx          # Loading spinner component
│   ├── ErrorMessage.jsx     # Error display component
│   ├── HomePage.jsx         # Landing page with section cards
│   ├── FilmsPage.jsx        # Films listing with search
│   ├── FilmDetailPage.jsx   # Individual film details
│   ├── PeoplePage.jsx       # Characters listing with pagination and search
│   ├── PersonDetailPage.jsx # Individual character details
│   ├── PlanetsPage.jsx      # Planets listing with pagination and search
│   └── StarshipsPage.jsx    # Starships listing with pagination and search
├── services/
│   └── api.js               # API service for SWAPI calls
├── App.jsx           # Main application component
├── App.css           # Additional styles
├── index.css         # Tailwind CSS imports
└── main.jsx          # Application entry point
```

## 🎨 Key Components

- **Router**: Custom hash-based routing system
- **Navbar**: Sticky navigation with active route highlighting
- **HomePage**: Landing page with section cards
- **FilmsPage**: List view of all Star Wars films with search
- **FilmDetailPage**: Detailed view of individual films
- **PeoplePage**: Paginated character listing with search
- **PersonDetailPage**: Detailed character information
- **PlanetsPage**: Planets listing with search and pagination
- **StarshipsPage**: Starships catalog with search and pagination

## 📝 API Reference

This project uses [SWAPI - The Star Wars API](https://swapi.dev/)
- Base URL: `https://swapi.dev/api`
- Endpoints: `/films`, `/people`, `/planets`, `/starships`

---

---
**May the Force be with you!** ⚔️
