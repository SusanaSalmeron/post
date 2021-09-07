import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <NavBar />
          <Blog />
          <Footer />
        </Route>
      </Router>



    </div>
  );
}

export default App;
