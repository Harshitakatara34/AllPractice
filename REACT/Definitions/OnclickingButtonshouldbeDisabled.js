import React, { useState } from 'react';

export const Data = () => {
  const [buttonVisible, setButtonVisible] = useState(true);
  const handleData = () => {
    setButtonVisible(false);
  }

  return (
    <>
      {buttonVisible && (
        <button onClick={handleData}>Click me</button>
      )}
    </>
  )
}