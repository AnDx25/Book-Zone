import logo from './logo.svg';
import Dashboard from './components/dashboard/Dashboard';
import Home from './screens/home/Home'
import './style/main.scss'
function App() {
  return (
    <div className="App">
      <Dashboard>
        <Home/>
      </Dashboard>
    </div>
  );
}

export default App;
