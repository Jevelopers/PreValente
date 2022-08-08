import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';

//Importacion de Paginas
import Administration from './Page/Administration/Administration'
import Error404 from './Page/404/Err404'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Administration />} />
            <Route path='Administration/*' element={<Administration />} />
            <Route path='Empleo' element={<Error404 />} />
            <Route path='Cv' element={<Error404 />} />
            <Route path='Usuario' element={<Error404 />} />
        </Route>
      </Routes>
      </header>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;