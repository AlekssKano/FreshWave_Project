import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/Main";
import {OurService} from "./layout/sections/OurServices/OurService";
import {Benefits} from "./layout/sections/benefits/Benefits";
import {AboutUs} from "./layout/sections/AboutUs";
import {Calculator} from "./layout/sections/Calculator";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <OurService/>
            <Benefits/>
            <AboutUs/>
            <Calculator/>
        </div>
    );
}

export default App;

