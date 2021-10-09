import Navbar from './components/navbar/NavbarMUI';
import Header from './components/header/Header';
import Team from './components/Our team/Team';
import Contact from './components/Contact Us/Contact';
import AI from './components/AI/AI';


//const colorDark = "#1f2937"
//const colorPrimary = "#eabd23"
//const colorLight = "rgb(55,65,81)"

function App() {
  return (
      <div>
        <Navbar/>
        <Header/>
        <AI></AI>
        <Team/>
        <Contact/>
      </div>
  );
}

export default App;
