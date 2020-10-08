import React from 'react';

import "./experience.css";

const Experience = () => {
  return (
    <div className="experience">
        <a href="https://www.lovethebrands.com" target="_blank" rel="noopener noreferrer" className="companyone">
            <img className="image" top width="100%" src={require("./image/general/lovethebrands.svg")} alt="companylogo"/>
        </a>
        
        <a href="https://www.meelogic.com/en/" target="_blank" rel="noopener noreferrer" className="companyone">
            <img top width="100%" className="image" src={require("./image/general/meelogic.png")} alt="companylogo" />
        </a>
        
        <a href="https://www.edenblock.com" target="_blank" rel="noopener noreferrer" className="companyone">
            <img top width="100%" className="image" src={require("./image/general/eden_block.png")} alt="companylogo" />
         </a>
       
        <a href="https://www.near.org" target="_blank" rel="noopener noreferrer" className="companyone">
            <img top width="100%" className="image" src={require("./image/general/near.png")} alt="companylogo" />
        </a>


        <div className="linkedIn">
              <a href="https://www.linkedin.com/in/urlichsanais/" target="_blank" rel="noopener noreferrer">
                <div className="buttonTouch">
                  <h5>LinkedIn</h5>
                </div>
              </a>
            </div>
        
    </div>
  );
};

export default Experience;