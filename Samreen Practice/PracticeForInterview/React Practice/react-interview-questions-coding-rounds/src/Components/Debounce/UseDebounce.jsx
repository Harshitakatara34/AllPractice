const useDebounce = (func, delay) => {
  let id;
  return () => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      func();
    }, delay);
  };
};
export default useDebounce;
