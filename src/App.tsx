import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {OurService} from "./layout/sections/OurServices/OurService";
import {Benefits} from "./layout/sections/benefits/Benefits";
import {AboutUs} from "./layout/sections/aboutUs/AboutUs";
import {Calculator} from "./layout/sections/calculator/Calculator";
import {Contact} from "./layout/sections/contacts/Contact";
import {Footer} from "./layout/footer/Footer";
import {Calculator2} from "./layout/sections/workingCalculator/Calculator2";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <OurService/>
            <Benefits/>
            <AboutUs/>
            <Calculator2/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

