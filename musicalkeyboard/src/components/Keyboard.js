import React from 'react';
import Key from './Key';
import '../App.css';

class Keyboard extends React.Component{
  render(){
    var keys = [
    {id:81, row: "first", character: "q", file: "Empty"},
    {id:87, row: "first", character: "w", file: "Empty"},
    {id:69, row: "first", character: "e", file: "Empty"},
    {id:82, row: "first", character: "r", file: "Empty"},
    {id:84, row: "first", character: "t", file: "Empty"},
    {id:89, row: "first", character: "y", file: "Empty"},
    {id:85, row: "first", character: "u", file: "Empty"},
    {id:73, row: "first", character: "i", file: "Empty"},
    {id:79, row: "first", character: "o", file: "Empty"},
    {id:80, row: "first", character: "p", file: "Empty"},
    {id:65, row: "second", character: "a", file: "Empty"},
    {id:83, row: "second", character: "s", file: "Empty"},
    {id:68, row: "second", character: "d", file: "39148__jobro__piano-ff-001.wav"},
    {id:70, row: "second", character: "f", file: "Empty"},
    {id:71, row: "second", character: "g", file: "Empty"},
    {id:72, row: "second", character: "h", file: "Empty"},
    {id:74, row: "second", character: "j", file: "Empty"},
    {id:75, row: "second", character: "k", file: "Empty"},
    {id:76, row: "second", character: "l", file: "Empty"},
    {id:90, row: "third", character: "z", file: "Empty"},
    {id:88, row: "third", character: "x", file: "Empty"},
    {id:67, row: "third", character: "c", file: "Empty"},
    {id:86, row: "third", character: "v", file: "Empty"},
    {id:66, row: "third", character: "b", file: "Empty"},
    {id:78, row: "third", character: "n", file: "Empty"},
    {id:77, row: "third", character: "m", file: "Empty"},
    ];
    return(
      <div>
        <Key keys={keys}/>
      </div>
    )
  }
}

export default Keyboard;