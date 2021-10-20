import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questions from './questions/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/interview/question-1">Interview Question 1</Nav.Link>
          <Nav.Link as={Link} to="/interview/question-2">Interview Question 2</Nav.Link>
          {/* <Nav.Link as={Link} to="/question-3">Interview Question 3</Nav.Link> */}
        </Nav>
      </Navbar>

      <Switch>
          <Route path="/interview/question-1">
           <Questions.Q1 />
          </Route>
          <Route path="/interview/question-2">
            <Questions.Q2 />
          </Route>
          <Route path="/question-3">
            <Questions.Q3 />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
