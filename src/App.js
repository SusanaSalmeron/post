import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id/post" component={Post} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
