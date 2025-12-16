import Home from "../components/Home" ;
import Footer from "../components/Footer" ;
import Aboutus from "../components/Aboutus" ;
import Work from "../components/Work";
import Delivery from "../components/Delivery";


export default function page() {
  return (    
    <div className="homepage">
    <Home/>
    <Aboutus/>
    <Work/>
    <Delivery/>
    <Footer/>
    </div>
    
    
    );
}
