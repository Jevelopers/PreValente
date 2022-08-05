import './App.css';
import Footer from './Components/Footer/Footer';

import NavegationBar from './Components/Navbar/NavegationBar'
//import Administracion from './Page/Index/Administration.jsx';
import Solicitud from './Page/Index/Content/Solicitud/Solicitud';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavegationBar />
      </header>
      <main className='App-main'>
        <Solicitud />
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;