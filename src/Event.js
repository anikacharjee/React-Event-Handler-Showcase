import React, { useState } from 'react';

const Event = () => {
  // State to track the visibility of the message
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle the button click event
  const handleButtonClick = () => {
    // Toggle the visibility state
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <button onClick={handleButtonClick}>Toggle Message</button>

      {/* Display a message based on the visibility state */}
      {isVisible && <p>This message is visible!</p>}
    </div>
  );
};

export default Event;
