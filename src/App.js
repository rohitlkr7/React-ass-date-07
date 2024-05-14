import React,{ useState } from 'react';
import {PhotoshopPicker} from 'react-color';
import './App.css';


function App() {
  const [color ,setcolor] = useState('#fff')
  const [showcolorpicker,setshowcolorpicker]=useState(false)
  return (
    <div>
{/* this is a button for showing color picker .  i am geting photoshopPicker from react-color */}
      <button onClick={ ()=>setshowcolorpicker (showcolorpicker=> !showcolorpicker)}>{showcolorpicker ?
       'close color picker': 'pick a color'}</button>


     {showcolorpicker &&(
     <PhotoshopPicker color={color} 
     onChange={updatecolor => setcolor(updatecolor.hex)}/>
     )}
     <h2>pick your color: {color}</h2>
    </div>
  );
}

export default App;
