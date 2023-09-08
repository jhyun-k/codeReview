import { Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Favorite from 'pages/Favorite';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
