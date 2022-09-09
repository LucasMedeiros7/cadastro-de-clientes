import styles from './styles/InputStyles.module.css';

export function SignUp({ formData, setFormData }) {
  return (
    <form className={styles.formSingUp}>
      <div className={styles.rightSideInput}>
        <div className={styles.inputName}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={styles.inputLastname}>
          <label htmlFor="lastname">Sobrenome:</label>
          <input
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={e =>
              setFormData({ ...formData, lastname: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.leftSideInput}>
        <div className={styles.inputEmail}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.inputPhone}>
          <div>
            <label htmlFor="ddd">DDD:</label>
            <input
              type="number"
              id="ddd"
              min="2"
              max="3"
              value={formData.ddd}
              onChange={e => setFormData({ ...formData, ddd: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
}
