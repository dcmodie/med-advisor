import React, {useState, useEffect} from 'react';

export default function Recommendation(props) {
  const {recommendation} = props;
  return (
    <div>
      <div style={{"width":'50%',"float":"left","height":"100px", "margin":"0px 0px 0 0"}}>{"Recommendation: "} </div>
      <div style={{"width":'60px', "float":"right"  , "fontWeight":"600"}}>{ recommendation}</div>
    </div>
    )

}
