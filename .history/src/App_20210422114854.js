import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <Router>
      <div className="App">
        This is Home App
        <Header />
        <Switch>
          <Route exact="/bar" component={BarChart} />
          <Route exact="/pie" component={PieChart} />
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
