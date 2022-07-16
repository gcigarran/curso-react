import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './Components/Menu'
import PublicRoutes from './Routes/PublicRoutes';
import Container from 'react-bootstrap/esm/Container';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Menu />
          <Container>
            <PublicRoutes />
          </Container>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
