import {Header, Posts, Users} from "./components";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <Users/>
        <Posts/>
      </div>
    </div>
  );
}

export default App;
