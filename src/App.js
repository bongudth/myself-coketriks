import './App.scss';
import { Router, Outlet, ReactLocation } from 'react-location'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Our from './components/Our/Our'
import Mine from './components/Mine/Mine'
import Me from './components/Me/Me'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/our',
    element: <Our />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/me',
    element: <Me />
  }
]

const location = new ReactLocation()

function App() {
  return (
    <Router routes={routes} location={location}>
      <Header />
      <Outlet />
    </Router>
  );
}

export default App;
