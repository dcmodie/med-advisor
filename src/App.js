import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import MedicalPreferenceSliders from './Components/Sliders'
import Recommendation from './Components/Recommendation'

import './App.css';

const LOW_PREM = 0;
const OOP_MAX = 1;
const CHOICE = 2;
function App() {
  const [recommendation, setRecommendation] = useState("");

  const reportSettings = (settingsArray)=>{

    const [lowPrem, oopMax, choice] = settingsArray;
    console.log('settings ' + lowPrem);
    console.log('settings ' + oopMax);
    console.log('settings ' + choice);
    if ((lowPrem >=3) && (oopMax >=3)){
      setRecommendation("HMO")
    }
    else if ((lowPrem >=3) && (choice >=3)){
      setRecommendation("HDHP")

    }
    else if ((oopMax >=3) && (choice >=3)){
      setRecommendation("PPO")

    }
    else {
      setRecommendation('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
         <MedicalPreferenceSliders reportSettings={reportSettings}/>
         <Recommendation recommendation={recommendation}/>
      </header>
    </div>
  );
}

export default App;


