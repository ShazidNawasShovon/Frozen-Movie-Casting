
import './App.css';
import Header from './components/Header/Header';
import CharecterDetails from './components/CharecterDetails/CharecterDetails';

function App() {
  return (
    <div className="App">
      {/* Show The Header File */}
      <Header></Header>
      {/* Show the all characters and their budgets */}
      <CharecterDetails></CharecterDetails>
    </div>
  );
}

export default App;
