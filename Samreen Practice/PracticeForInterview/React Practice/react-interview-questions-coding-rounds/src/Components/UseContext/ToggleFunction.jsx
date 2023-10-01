import { createContext, useState } from "react";

export const createToggleContext = createContext();

function ToggleFunction({ children }) {
  const [toggle, settoggle] = useState("light");

  const toggledata = () => {
    settoggle(toggle === "light" ? "dark" : "light");
  };

  return (
    <div>
      <createToggleContext.Provider value={{ toggledata, toggle }}>
        {children}
      </createToggleContext.Provider>
    </div>
  );
}

export default ToggleFunction;
