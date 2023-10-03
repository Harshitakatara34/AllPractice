function useThrottle(func, delay) {
  let id = false;

  return () => {
    if (!id) {
      func();
      id = true;
      setTimeout(() => {
        id = false;
      }, delay);
    }
  };
}

export default useThrottle;
