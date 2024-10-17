import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import "./index.css";
import Home from './pages/Home';
import Projects from './pages/Projects';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
