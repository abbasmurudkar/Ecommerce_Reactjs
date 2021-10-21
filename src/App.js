import { Route, Switch } from 'react-router';
import './App.css';
import MainPageLayout from './pages/MainPageLayout';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import Signin from './pages/Signin';
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
