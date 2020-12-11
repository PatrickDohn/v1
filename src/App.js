import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About.js'
import Home from './components/pages/Home';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
