import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './Components/Menu'
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <PublicRoutes />
      </Router>
    </div>
  );
}

export default App;
