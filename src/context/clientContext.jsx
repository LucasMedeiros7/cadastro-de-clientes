import { createContext, useState } from 'react';

export const clientContext = createContext();

export function ClientProvider({ children }) {
  const saveOnLocalStorage = newClient => {
    let clientStorage = JSON.parse(localStorage.getItem('clients-Storage'));

    if (!clientStorage) {
      clientStorage = [];
    }

    clientStorage.push(newClient);
    localStorage.setItem('clients-Storage', JSON.stringify(clientStorage));
  };

  const useLocalStorage = () => {
    let clientStorage = JSON.parse(localStorage.getItem('clients-Storage'));

    if (!clientStorage) {
      clientStorage = [];
    }

    return clientStorage;
  };

  return (
    <clientContext.Provider value={{ saveOnLocalStorage, useLocalStorage }}>
      {children}
    </clientContext.Provider>
  );
}
