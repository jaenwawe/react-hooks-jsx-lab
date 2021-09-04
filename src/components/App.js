import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import { ReactDOM } from "react";
import { data } from "browserslist";




function App(){
    return(    
        <div>
            <NavBar/>
            <Home/>
            <About/>
        </div> 
    )    
}

export default App;

