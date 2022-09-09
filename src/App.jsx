import { ClientProvider } from './context/clientContext';
import { AppRoutes } from './Routes';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section className={styles.section}>
        <ClientProvider>
          <AppRoutes />
        </ClientProvider>
      </section>
    </main>
  );
}
