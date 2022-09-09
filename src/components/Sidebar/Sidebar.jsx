import { User } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.wrapper}>
      <header>
        <User className={styles.UserSvg} color="white" size={180} />
      </header>

      <footer>
        <Link className={styles.link} to="/">
          Cadastrar Cliente
        </Link>

        <Link className={styles.link} to="/clients">
          Clientes
        </Link>
      </footer>
    </aside>
  );
}
