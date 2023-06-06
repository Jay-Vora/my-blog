import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <NavBar />
            <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesListPage />} />
              <Route path="/articles/:articleID" element={<ArticlePage />} />
            </Routes>
              
            </div>
          </div>
      
    </BrowserRouter>
     );
    
}

export default App;
