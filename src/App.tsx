import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import {OurService} from "./layout/sections/OurServices/OurService";
import {Benefits} from "./layout/sections/benefits/Benefits";
import {AboutUs} from "./layout/sections/AboutUs";
import {Calculator} from "./layout/sections/Calculator";
import {Contact} from "./layout/sections/contacts/Contact";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <OurService/>
            <Benefits/>
            <AboutUs/>
            <Calculator/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

