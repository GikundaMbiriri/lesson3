import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import home from './pages/home';
import about from './pages/about';
function App() {
  return (
    <>
  
   <Router>
    <Switch>
       <Route exact path="/" component={home}/>
       <Route exact path="/about" component={about}/>
    </Switch>
   </Router>
  

    </>
  );
}

export default App;
