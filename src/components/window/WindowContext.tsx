import React, { createContext, useState } from 'react';

type WindowProviderProps = {
  children: React.ReactNode;
};

export const WindowContext = createContext({
  initial: { x: 0, y: 0 },
  offset: { x: 0, y: 0 },
  setInitial: (initial: { x: number; y: number }) => {},
  setOffset: (offset: { x: number; y: number }) => {}
});

export const WindowProvider = ({ children }: WindowProviderProps) => {
  const [initial, setInitial] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <WindowContext.Provider
      value={{
        initial,
        offset,
        setInitial,
        setOffset
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};