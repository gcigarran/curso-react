import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './Components/Menu'
import PublicRoutes from './Routes/PublicRoutes';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Container>
          <PublicRoutes />
        </Container>
      </Router>
    </div>
  );
}

export default App;
