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
  	//reportSettings([lowDeduct, oopMax, choice]);
  	//console.log('change ' + e.target.getAttribute('value'));

  }

  useEffect (
  		()=>{
  			reportSettings([lowPrem, oopMax, choice])
  		}
  	,[lowPrem, oopMax, choice])

  return (
    <div className={classes.root}>
      <div style={{"margin-bottom": "50px"}}>Use the sliders to select the importance of each item.</div>
      <div></div>
      <Typography id="discrete-slider" gutterBottom>
        Low Deductible
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
      />
      <Typography id="discrete-slider" gutterBottom>
        Low Out of Pocket Max
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
      />
    </div>
  );
}
