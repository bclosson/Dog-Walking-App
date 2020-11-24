import './index.css';
import routes from './routes/routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <NavBar />
     { routes }
     <Footer />
    </div>
  );
}

export default App;
