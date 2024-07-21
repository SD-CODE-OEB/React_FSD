import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
