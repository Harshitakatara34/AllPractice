import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// Child component that accepts a ref
const ChildComponent = forwardRef((props, ref) => {
  // Create a local ref for an input element
  const inputRef = useRef(null);

  // Expose a function to focus the input element
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return <input type="text" ref={inputRef} />;
});

// Parent component
function ParentComponent() {
  // Create a ref for the child component
  const childRef = useRef(null);

  // Function to focus the input element in the child component
  const focusChildInput = () => {
    childRef.current.focusInput();
  };

  return (
    <div>
      <button onClick={focusChildInput}>Focus Child Input</button>
      <ChildComponent ref={childRef} />
    </div>
  );
}

export default ParentComponent;
