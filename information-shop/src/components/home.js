import React from "react";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

import Kickflip from "../images/Kickflip.jpg";
import putting from "../images/putting.png";
import react from "../images/react.png";
import versablock from "../images/versablock.jpg";



const Home = (props) => {   
    console.log(props);  
    return(
       <div className="container">
           <div className="image">
               <img src={Kickflip} alt="Kickflip" />
               <h3>How to do a Kickflip.</h3>
               <h3>$25</h3>
               <a onClick={() => props.addBasket("Kickflip")} className="addToCart cart1" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={putting} alt="putting" />
               <h3>How to Putt in Golf.</h3>
               <h3>$50</h3>
               <a onClick={() => props.addBasket("Putting")} className="addToCart cart2" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={react} alt="react icon" />
               <h3>How to use React.js.</h3>
               <h3>$35</h3>
               <a onClick={() => props.addBasket("React.js")} className="addToCart cart3" href="#">Add To Cart</a>
           </div>
           <div className="image">
               <img src={versablock} alt="versa block" />
               <h3>How to use Versa Block.</h3>
               <h3>$65</h3>
               <a onClick={() => props.addBasket("Versa Block")} className="addToCart cart4" href="#">Add To Cart</a>
           </div>                        
       </div>
    );
}

export default connect(null, { addBasket })(Home);