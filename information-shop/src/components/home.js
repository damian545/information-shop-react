import React from "react";
import Kickflip from "../images/Kickflip.jpg";
import putting from "../images/putting.png";
import react from "../images/react.png";
import versablock from "../images/versablock.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";


const Home = (props) => {   
    console.log(props);  
    return(
       <div className="container">
           <div className="image">
               <img src={Kickflip} alt="Kickflip" />
               <h3>How to do a kickflip</h3>
               <h3>$100</h3>
               <a onClick={props.addBasket} className="addToCart cart1" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={putting} alt="putting" />
               <h3>How to putt in Golf</h3>
               <h3>$100</h3>
               <a onClick={props.addBasket} className="addToCart cart2" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={react} alt="react icon" />
               <h3>How to use React.js</h3>
               <h3>$100</h3>
               <a onClick={props.addBasket} className="addToCart cart3" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={versablock} alt="versa block" />
               <h3>How to use Versa Block</h3>
               <h3>$100</h3>
               <a onClick={props.addBasket} className="addToCart cart4" href="#">Add To Cart</a>
           </div>                        
       </div>
    );
}

export default connect(null, { addBasket })(Home);