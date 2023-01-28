import './App.css';
import {Routes, Route} from 'react-router-dom'
import AuthorList from './components/AuthorList';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorList/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
