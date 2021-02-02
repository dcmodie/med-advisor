import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider(props) {
	const {reportSettings} = props; 
  	const classes = useStyles();

  	const [lowPrem, setLowPrem] = useState(1);
  	const [oopMax, setOopMax] = useState(1);
  	const [choice, setChoice] = useState(1);

  	const [lowPremDisabled, setLowPremDisabled] = useState(false);
  	const [oopMaxDisabled, setOopMaxDisabled] = useState(false);
  	const [choiceDisabled, setChoiceDisabled] = useState(false);

  	const sliderHandler = (e, value)=>{
  	// console.log('change ' + e.target.id);
  	// console.log('change ' + value);
	  	switch (e.target.id){
	  		case "lowPrem":
	  			setLowPrem(value);
	  		break;
	  		case "oopMax":
	  			setOopMax(value);
	  		break;
	  		case "choice":
	  			setChoice(value);
	  		break;
	  	}
  }

  useEffect (
		()=>{
			reportSettings([lowPrem, oopMax, choice])
		    if ((lowPrem >=3) && (oopMax >=3)){
		      setLowPremDisabled(false);
		      setOopMaxDisabled(false);
		      setChoiceDisabled(true);
		    }
		    else if ((lowPrem >=3) && (choice >=3)){
		      setLowPremDisabled(false);
		      setOopMaxDisabled(true);
		      setChoiceDisabled(false);

		    }
		    else if ((oopMax >=3) && (choice >=3)){
		      setLowPremDisabled(true);
		      setOopMaxDisabled(false);
		      setChoiceDisabled(false);
		    }
		    else {
		      setLowPremDisabled(false);
		      setOopMaxDisabled(false);
		      setChoiceDisabled(false);

		    }
		}
  	,[lowPrem, oopMax, choice])

  return (
    <div className={classes.root}>
      <div style={{"margin-bottom": "50px"}}>Use the sliders to select the importance of each item.</div>
      <div></div>
      <Typography id="discrete-slider" gutterBottom>
        Low Premium
      </Typography>
      <Slider
      	id="lowPrem"
      	value={lowPrem}
      	onChange={sliderHandler}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        style={{"margin-bottom": "50px"}}
        disabled={lowPremDisabled}
      />
      <Typography id="discrete-slider" gutterBottom>
        Low Out Of Pocket Max
      </Typography>
      <Slider
      	id="oopMax"
      	value={oopMax}
      	onChange={sliderHandler}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        style={{"margin-bottom": "50px"}}
        disabled={oopMaxDisabled}
      />
      <Typography id="discrete-slider" gutterBottom>
        Choice of Doctor
      </Typography>
      <Slider
      	id="choice"
      	value={choice}
      	onChange={sliderHandler}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        style={{"margin-bottom": "50px"}}
        disabled={choiceDisabled}
      />
    </div>
  );
}
