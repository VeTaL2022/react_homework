import './App.css';
import {Header, Posts, Users} from "./components";

function App() {
  return (
    <div>
      <Header/>
      <div className={'app'}>
        <Users/>
        <Posts/>
      </div>
    </div>
  );
}

export default App;
