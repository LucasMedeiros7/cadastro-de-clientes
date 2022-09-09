import { Sidebar } from './components/Sidebar/Sidebar';
import { Register } from './pages/Register';

import styles from './App.module.css';
import './global.css';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <section className={styles.section}>
        <AppRoutes />
      </section>
    </main>
  );
}
