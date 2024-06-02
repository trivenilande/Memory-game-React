import React from "react";
import MemoryGame from "./MemoryGame";

function App(){
  const images =['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg']

return(
  <div className="App">
    <MemoryGame images={images}/>
  </div>
);
}

export default App;