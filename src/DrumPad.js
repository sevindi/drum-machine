import React from 'react';

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillMount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleBlink = () => {
    const parent = this.audio.parentNode;
    parent.classList.add('on');
    setTimeout(() => {
      parent.classList.remove('on');
    }, 400)
  }

  handleKeyPress = (e) => {
    const letter = e.key.toUpperCase();
    if(letter === this.props.letter) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
      this.handleBlink();
    }
  }

  handleMouseClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);

    this.handleBlink();
  }

  render() {
    return (
      <div className='drum-pad' id={this.props.letter} onClick={this.handleMouseClick}>
        {this.props.letter}
        <audio src={this.props.audio} className='clip' id={this.props.key} ref={r => this.audio = r}></audio>
      </div>
    )
  }
}

export default DrumPad;