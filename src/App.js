import './App.css';
import PlayBar from './components/PlayBar';
import PlayList from './components/PlayList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="container">
      <Sidebar />
      <PlayList />
    <PlayBar />
    </div>
    </>
  );
}

export default App;
