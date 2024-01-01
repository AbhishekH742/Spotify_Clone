import './App.css';
import PlayList from './components/PlayList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <PlayList />
     
    </div>
  );
}

export default App;
