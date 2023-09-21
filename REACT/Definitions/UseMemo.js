// useMemo in React is a hook that memoizes (caches) the result of a computation 
// and recalculates it only when its dependencies change, optimizing performance
// returns memoized value

// useMemo is typically used for optimizing expensive calculations or data transformations.


import React, { useState, useMemo } from 'react';

function ParentComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  // useMemo memoizes the result of a computation
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return value1 + value2;      // it will only Calculate the value whenever anyone one value get updated.
  }, [value1, value2]);

  
  return (
    <div>
      <input type="number" value={value1} onChange={(e) => setValue1(Number(e.target.value))} />
      <input type="number" value={value2} onChange={(e) => setValue2(Number(e.target.value))} />
      <p>Sum: {sum}</p>
    </div>
  );
}
