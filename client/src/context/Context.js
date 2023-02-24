import { createContext, useState } from "react";

export const CutContext = createContext({
  cutSelect: "",
  setCutSelect: () => {},
});

export const CutStore = (props) => {
  const [cutSelect, setCutSelect] = useState("");

  return (
    <CutContext.Provider value={{ cutSelect, setCutSelect }}>
      {props.children}
    </CutContext.Provider>
  );
};

export const FrameBgContext = createContext({
  frameBg: null,
  setFrameBg: () => {},
});

export const FrameBgStore = (props) => {
  const [frameBg, setFrameBg] = useState("");

  return (
    <FrameBgContext.Provider value={{ frameBg, setFrameBg }}>
      {props.children}
    </FrameBgContext.Provider>
  );
};

