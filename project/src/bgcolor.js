import React, { useState } from 'react';

function Bgcolor() {
  const colors = ['red', 'blue', 'green', 'yellow','pink','white','skyblue','cyan','indigo','magenta','orange','violet','purple','grey','lightgreen'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeBackgroundColor = () => {
    // Get the next color index
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
  
    document.body.style.backgroundColor = colors[nextColorIndex];
    setCurrentColorIndex(nextColorIndex);
  };

  return (
    <div className="App">
      <header >
        <h1>Change Background Color</h1>
        <div>
          <button onClick={changeBackgroundColor}>Change Color</button>
        </div>
      </header>
    </div>
  );
}

export default Bgcolor;
