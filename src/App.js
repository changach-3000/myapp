import './App.css';
import Blogs from './components/Blog';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
   
        <Switch>
            <Route path="/">
             <Blogs />
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
