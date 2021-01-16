import React, {useState} from "react";
import "./CustomNavbar.css";
import Burger from 'react-css-burger';

const CustomNavbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open === true){
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      setOpen(false);
    }
    prevScrollpos = currentScrollPos;
  } 

  return (
    <div className="navbar" onChange={toggleMenu}>


      <div className="gridbox">
        <div className="gridboxone">
          <img
            id="signature"
            src={require("./extras/image/general/logo.png")}
            alt="signature"
            onClick={toggleMenu}
          />
        </div>
        <div className="gridboxtwo">
          <Burger
              onClick={toggleMenu}
              active={open}
              burger="squeeze"
              color="#6b0000"
              hoverOpacity={0.8}
              scale={1.2}
          />
        </div>
      </div>
      

      {
        open
          ? (
            <div className="menu">
              <button><a href="/">Work</a></button>
              <button><a href="/about">About</a></button>
              <button><a href="https://blog.anaisurl.com/">Blog</a></button>
              <button><a href="https://devops.anaisurl.com/">DevOps Diary</a></button>
              <button><a href="/contact">Contact</a></button>
            </div>
          )
          : (
            null
          )
      }
    </div>
  );

}

export default CustomNavbar;
