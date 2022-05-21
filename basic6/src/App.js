import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';


function Home() {
  return (
    <>
      <h2>Home</h2>
      <nav>
        <ul>
          <li><Link to="About">Show About</Link></li>
          <li><Link to="Contact">Show Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About</h2>
      <ul>
        <li><NavLink to="About">Show About</NavLink></li>
        <li><NavLink to="Contact">Show Contact</NavLink></li>
      </ul>
    </>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

const NotFound = () => {
  return (
    <>
      <h1>お探しのページは見つかりませんでした。</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
