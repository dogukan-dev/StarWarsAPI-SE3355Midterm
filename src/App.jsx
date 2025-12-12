import { Router } from './components/Router.jsx';
import { Navbar } from './components/Navigation.jsx';
import { HomePage } from './components/HomePage.jsx';
import { FilmsPage } from './components/FilmsPage.jsx';
import { FilmDetailPage } from './components/FilmDetailPage.jsx';
import { PeoplePage } from './components/PeoplePage.jsx';
import { PersonDetailPage } from './components/PersonDetailPage.jsx';
import { PlanetsPage } from './components/PlanetsPage.jsx';
import { StarshipsPage } from './components/StarshipsPage.jsx';

export default function App() {
  return (
    <Router>
      {(route) => {
        const renderPage = () => {
          if (route === '/' || route === '') return <HomePage />;
          if (route === '/films') return <FilmsPage />;
          if (route.startsWith('/films/')) return <FilmDetailPage id={route.split('/')[2]} />;
          if (route === '/people') return <PeoplePage />;
          if (route.startsWith('/people/')) return <PersonDetailPage id={route.split('/')[2]} />;
          if (route === '/planets') return <PlanetsPage />;
          if (route === '/starships') return <StarshipsPage />;
          return <HomePage />;
        };

        return (
          <div className="min-h-screen bg-gray-900">
            <Navbar currentRoute={route === '/' || route === '' ? '/' : `/${route.split('/')[1]}`} />
            {renderPage()}
          </div>
        );
      }}
    </Router>
  );
}
