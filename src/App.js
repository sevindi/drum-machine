import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

const sounds = [
  {
  key: 'Q',
  id: 'Heater-1',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, 
  {
  key: 'W',
  id: 'Heater-2',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, 
  {
  key: 'E',
  id: 'Heater-3',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, 
  {
  key: 'A',
  id: 'Heater-4',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, 
  {
  key: 'S',
  id: 'Clap',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, 
  {
  key: 'D',
  id: 'Open-HH',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
  key: 'Z',
  id: "Kick-n'-Hat",
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
  key: 'X',
  id: 'Kick',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
  key: 'C',
  id: 'Closed-HH',
  audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'Drum Machine'
    }
  }

  handleDisplay = display => this.setState({ display })

  render() {
    return(
      <div className='container'>
        <div id='drum-machine'>
          <div className='display'>{this.state.display}</div>
          <div className='drum-pads'>
            {sounds.map(val => (
              <DrumPad letter={val.key} id={val.id} audio={val.audio} handleDisplay={this.handleDisplay}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
