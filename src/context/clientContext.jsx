import { createContext, useState } from 'react';

export const clientContext = createContext();

export function ClientProvider({ children }) {
  const [clientsData, setClientsData] = useState([]);

  function useLocalStorage(newClient) {
    let storage = JSON.parse(localStorage.getItem('clients-Storage'));

    if (!storage) {
      storage = [];
    }

    setClientsData(() => [...storage, newClient]);

    localStorage.setItem('clients-Storage', JSON.stringify(clientsData));
  }

  return (
    <clientContext.Provider value={{ useLocalStorage }}>
      {children}
    </clientContext.Provider>
  );
}
