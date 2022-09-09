import { Form } from '../components/Form/Form';

import styles from './Register.module.css';

export function Register() {
  return (
    <div className={styles.registerContainer}>
      <header className={styles.header}>
        <h1>Cadastrar novo cliente</h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}
