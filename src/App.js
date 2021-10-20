import { Switch } from 'react-router';
import './App.css';
import MainPageLayout from './components/MainPageLayout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Signin from './pages/Signin';
function App() {

  return (
    <Switch>
      <PublicRoute path="/sigin">
        <Signin />
      </PublicRoute>
      <PrivateRoute path="/">
        <MainPageLayout />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
