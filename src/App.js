import './App.css';
import React, {useEffect, useState} from 'react';


function App() {

  const [str,setStr] = useState('');

  function buildStr(e){
    let newStr = str + e;
    setStr(newStr);
  }

  function backspace(){
    if(str.length >= 1){
      let newStr = str.slice(0,str.length-1);
      setStr(newStr);
    }
  }
  const styleObj = {
    position: "absolute",
    border:"0px",
    height:"36px",
    display:"block",
    right:"20px",
    top:"15px"
    
  }

  return (
    <div className="App">
      <div className="overlay">
      <a href='https://ko-fi.com/S6S23FQBI' target='_blank'><img height='36' style={styleObj} src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        <div className="forerunner">
            <div className="row">
              <p  onClick={()=>{buildStr('A')}}><span>A</span></p>
              <p onClick={()=>{buildStr('B')}}><span>B</span></p>
              <p  onClick={()=>{buildStr('C')}}><span>C</span></p>
              <p  onClick={()=>{buildStr('D')}}><span>D</span></p>
              <p  onClick={()=>{buildStr('E')}}><span>E</span></p>
              <p  onClick={()=>{buildStr('F')}}><span>F</span></p>
              <p  onClick={()=>{buildStr('G')}}><span>G</span></p>
            </div>
            <p className="regular1">A B C D E F G</p> 

            <div className="row">
              <p  onClick={()=>{buildStr('H')}}><span>H</span></p>
              <p onClick={()=>{buildStr('I')}}><span>I</span></p>
              <p  onClick={()=>{buildStr('J')}}><span>J</span></p>
              <p  onClick={()=>{buildStr('K')}}><span>K</span></p>
              <p  onClick={()=>{buildStr('L')}}><span>L</span></p>
              <p  onClick={()=>{buildStr('M')}}><span>M</span></p>
              <p  onClick={()=>{buildStr('N')}}><span>N</span></p>
            </div>
            <p className="regular1">H I J K L M N</p>

            <div className="row">
              <p  onClick={()=>{buildStr('O')}}><span>O</span></p>
              <p onClick={()=>{buildStr('P')}}><span>P</span></p>
              <p  onClick={()=>{buildStr('Q')}}><span>Q</span></p>
              <p  onClick={()=>{buildStr('R')}}><span>R</span></p>
              <p  onClick={()=>{buildStr('S')}}><span>S</span></p>
              <p  onClick={()=>{buildStr('T')}}><span>T</span></p>
              <p  onClick={()=>{buildStr('U')}}><span>U</span></p>
            </div>
            <p className="regular1">O P Q R S T U</p>

            <div className="row">
              <p  onClick={()=>{buildStr('V')}}><span>V</span></p>
              <p onClick={()=>{buildStr('W')}}><span>W</span></p>
              <p  onClick={()=>{buildStr('X')}}><span>X</span></p>
              <p  onClick={()=>{buildStr('Y')}}><span>Y</span></p>
              <p  onClick={()=>{buildStr('Z')}}><span>Z</span></p>
            </div>
            <p className="regular1">V W X Y Z</p>    

            <div className="row">
              <p  onClick={()=>{buildStr('1')}}><span>1</span></p>
              <p onClick={()=>{buildStr('2')}}><span>2</span></p>
              <p  onClick={()=>{buildStr('3')}}><span>3</span></p>
              <p  onClick={()=>{buildStr('4')}}><span>4</span></p>
              <p  onClick={()=>{buildStr('5')}}><span>5</span></p>
              <p  onClick={()=>{buildStr('6')}}><span>6</span></p>
              <p  onClick={()=>{buildStr('7')}}><span>7</span></p>
            </div>
            <p className="regular1">1 2 3 4 5 6 7</p>

            <div className="row">
              <p  onClick={()=>{buildStr('8')}}><span>8</span></p>
              <p onClick={()=>{buildStr('9')}}><span>9</span></p>
              <p  onClick={()=>{buildStr('0')}}><span>0</span></p>
              <p  onClick={()=>{buildStr('.')}}><span>.</span></p>
              <p  onClick={()=>{buildStr(' ')}}><span>-</span></p>
            </div>
            <p className="regular1">8 9 0 . <span className="deletion" >spc</span> <span className="deletion" onClick={()=>{backspace()}}>del</span></p>     
            <h1>{str}</h1>
            <h1 className="normal">{str}</h1>
        </div>
        <footer>
          Made by <a href="https://twitter.com/cris178" target="_blank" rel="noopener noreferrer">Cristian Reyes</a>. Font by <a href="https://twitter.com/Halopedia/status/1341518503573139459" target="_blank" rel="noopener noreferrer"> PedanticAuspice</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
