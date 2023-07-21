
import './App.css';
import NavBar from './NavBar.jsx';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Summary from './Pages/summary';

function App() {
  let component
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
      component = <Summary />
      break;
    case "/paginaportafolio":
      component = <Summary />
      break;
    case "/Contact":
      component = <Contact />
      break;
    case "/About":
      component = <About />
      break;
    case "/Education":
      component = <Education />
      break;
    case "/Projects":
      component = <About />
      break;
  }
  return (
    <>

      <NavBar />
      {component}
    </>
  );
}
export default App;