//Custom Hook
import { useState, useEffect } from 'react';
function useStorage(key) {
const [value, setValue] = useState(() => { 
    const item = window.localStorage.getItem(key); return item? JSON.parse(item): null;
});
useEffect(() => {
window.localStorage.setItem(key, JSON.stringify(value));
}, [value, key]);
return [value, setValue];
}






import React from 'react';
import useStorage from './useStorage'; // Import the custom hook

function MyComponent() {
  // Usage with a string key and initial value
  const [name, setName] = useStorage('name', '');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={removeName}>Clear Name</button>
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default MyComponent;
