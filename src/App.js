import logo from './logo.svg';
import './App.css';
import { Search } from './Components/search';
import {Route,Routes} from "react-router-dom"
import { SearchID } from './Components/searchID';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<Search/>}/>
      <Route path = "/:id" element = {<SearchID/>} />
      </Routes>
    </div>
  );
}

export default App;
