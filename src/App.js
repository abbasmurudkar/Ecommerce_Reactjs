import { Route, Switch } from 'react-router';
import './App.css';
import MainPageLayout from './components/MainPageLayout';
function App() {

  return (
 
      <Switch>
        <Route exact path="/">
          <MainPageLayout />
        </Route>
      </Switch>
  );
}

export default App;
