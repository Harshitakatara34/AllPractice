// useCallback is for memoizing callback functions to prevent unnecessary re-creation, 
// while useMemo is for memoizing the results of computations to optimize performance by 
// avoiding redundant calculations.



// , if you want to memoize a computation result, use useMemo, 
// and if you want to memoize a callback function, use useCallback