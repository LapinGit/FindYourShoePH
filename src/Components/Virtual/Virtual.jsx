import React from 'react'
import './Virtual.css'
import ReactCompareImage from "react-compare-image";
import Before from "../Assets/before.png";
import After from "../Assets/after.png";
const Virtual = () => {
  return (
    
<div className="Virtual">
    <div className="left">
        <span>SHOE CLEANING SERVICE</span>
        <span>Never GO OUT WITH DIRTY SHOES AGAIN!</span>
        <span>Try Now!</span>
    </div>
    <div className="right">
        <div className="beforeafter">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
    </div>
</div>

  )
}

export default Virtual