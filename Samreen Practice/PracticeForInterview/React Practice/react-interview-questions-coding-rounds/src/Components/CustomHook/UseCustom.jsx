import { useState } from "react";

function useCustomhook(initState = false) {
  const [tog, settog] = useState(initState);

  const funTog = () => {
    settog((pre) => !pre);
  };

  return [tog, funTog];
}

export default useCustomhook;
