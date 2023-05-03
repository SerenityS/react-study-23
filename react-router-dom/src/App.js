import './index.css';
import { Routes, Route, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h2>Hello React Router DOM</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={'Not Found'}></Route>
      </Routes>
    </div>
  );
}

export default App;
