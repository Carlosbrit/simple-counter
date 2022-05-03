import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Counter = (props) => {
	return <div className="containter">
        <div className="clock">⏰</div>
        <div className="sixthDigit">0</div>
        <div className="fithdigit">0</div>
        <div className="fourthDigit">0</div>
        <div className="thirdDigit">0</div>
        <div className="secondDigit">0</div>
        <div className="firstdigit">1</div>
        </div>
};

