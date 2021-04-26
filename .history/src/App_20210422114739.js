import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import BarChart from './components/BarChart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact="/bar" component={BarChart} />
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
