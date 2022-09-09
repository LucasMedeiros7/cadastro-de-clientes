import { useContext, useEffect, useState } from 'react';
import { clientContext } from '../context/clientContext';
import styles from './Clients.module.css';

export function Clients() {
  const [clients, setClients] = useState(null);
  const { useLocalStorage } = useContext(clientContext);

  useEffect(() => {
    const clientsAlreadyRegistred = useLocalStorage();

    if (clientsAlreadyRegistred.length) {
      setClients(clientsAlreadyRegistred);
    }
  }, []);

  return (
    <div className={styles.clientsContainer}>
      <header className={styles.header}>
        <h1>Lista de clientes</h1>
      </header>
      <main>
        <h1>clientes</h1>
        {clients?.map(client => {
          return <p>{client.name}</p>;
        }) || <p>nenhum cliente cadastrado</p>}
      </main>
    </div>
  );
}
