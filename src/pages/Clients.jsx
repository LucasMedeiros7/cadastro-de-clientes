import { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card/Card';
import { clientContext } from '../context/clientContext';
import styles from './Clients.module.css';

export function Clients() {
  const { useLocalStorage } = useContext(clientContext);
  const [clients, setClients] = useState(null);

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
        {clients?.map((client, index) => {
          return <Card key={index} client={client} index={index} />;
        }) || <h1>Nenhum cliente cadastrado</h1>}
      </main>
    </div>
  );
}
