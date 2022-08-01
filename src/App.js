import Menu from './components/Menu';
import Footer from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/menu.css";
import './App.css'
function App() {
  return (
    <div className="App bg-dark text-light">
      <Menu/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
