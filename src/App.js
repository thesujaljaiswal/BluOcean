import './App.css';
import Contactus from './Components/Contactus';
import Content from './Components/Content';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Content maintitle="Contact Us"/>
    <Contactus/>
    <Footer/>
    </>
  );
}

export default App;
