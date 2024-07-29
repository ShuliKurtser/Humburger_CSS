
import './App.css';
import Footer from './components/footer';
import Blog from'./components/blog';
import Contact from './components/contact';
import Menu from'./components/menu';
import Navbar from './components/navbar';
// import Home from   './components/home';
   import Home from './components/home ';
   import  About from './components/about';
   import Service from './components/service';
function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Menu/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
