import React from 'react';
import '../App.css';

import Sound from 'react-sound';
import testSound from '../samples/grand_piano/39148__jobro__piano-ff-001.wav'

class Key extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: "",
      file: "",
      selected: false
    }
    this.keyPressed = this.keyPressed.bind(this);
    this.clearStroke = this.clearStroke.bind(this);
  }

  keyPressed (event){
    var activeKey = this.props.keys.filter(function(key){
      return key.id === event.keyCode
    });
    this.setState({
      key: activeKey,
      selected: true
    });
  }

  clearStroke (){
    this.setState({
      key: "",
      selected: false
    });
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
    document.addEventListener("keyup", this.clearStroke, false);
  }

  render() {
    var firstRowKeys = this.props.keys.filter(function(key){
      return key.row === "first";
    })
    .map(function(key){
      return <div className="Key-inline" key={key.id}>{key.character}</div>
    });
    var secondRowKeys = this.props.keys.filter(function(key){
      return key.row === "second";
    })
    .map(function(key){
      return <div className="Key-inline" key={key.id}>{key.character}</div>
    });
    var thirdRowKeys = this.props.keys.filter(function(key){
      return key.row === "third";
    })
    .map(function(key){
      return <div className="Key-inline" key={key.id}>{key.character}</div>
    });
    return(
      <React.Fragment>
        <h1 className="Key">{firstRowKeys}</h1>
        <h1 className="Key">{secondRowKeys}</h1>
        <h1 className="Key">{thirdRowKeys}</h1>
        <Sound
          url={testSound}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    </React.Fragment>
    );
  }
}

export default Key;