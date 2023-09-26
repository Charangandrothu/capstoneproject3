import{Link} from "react-router-dom";
import './App.css';
function Menu(){
    return(
        <div id="cols">
            <Link to ="/" id="wee">Home</Link> |
            <Link to ="/about" id="we">About</Link> |
            <Link to ="/Calculator" id="we">Calculator</Link> |
            <Link to ="/AgeCalculator"id="we">Age Calculator</Link> |
            <Link to ="/RootCalculator"id="we"> SquareRoot Calculator</Link> |
            <Link to ="/PercentageCalculator"id="we"> Percentage Calculator</Link> |
            <Link to ="/RandomNumberGenerator"id="we"> RandomNumberGenerator</Link> |
            <Link to ="/SquareCalculator"id="we"> SquareCalculator</Link> |
            <Link to ="/contact"id="we">Contact</Link> |
            <Link to ="/services"id="we">Services</Link> |
            
            

        
        </div>
    )
}
 export default Menu