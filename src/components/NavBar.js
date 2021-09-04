import App from "./App"



// x The <NavBar> component should return the following JSX elements:
// x a <nav> element
// x inside the nav element, there should be two child elements:
//JSX Lab
// x an <a> element, with the href attribute set to #home, and the content of "Home"
// x an <a> element, with the href attribute set to #about, and the content of "About"

function NavBar(){
    return(
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
        </nav>
    );
}

export default NavBar;