import styles from './styles/InputStyles.module.css';

export function PersonalInfo({ formData, setFormData }) {
  return (
    <form className={styles.formSingUp}>
      <div className={styles.rightSideInput}>
        <div className={styles.inputName}>
          <label htmlFor="CPF">CPF:</label>
          <input
            type="text"
            id="CPF"
            value={formData.CPF}
            onChange={e => setFormData({ ...formData, CPF: e.target.value })}
          />
        </div>

        <div className={styles.inputLastname}>
          <label htmlFor="income">Renda mensal:</label>
          <input
            type="number"
            id="income"
            value={formData.income}
            onChange={e => setFormData({ ...formData, income: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.leftSideInput}>
        <div className={styles.inputBirthDate}>
          <label htmlFor="birthDate">Data de nascimento:</label>
          <input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={e =>
              setFormData({ ...formData, birthDate: e.target.value })
            }
          />
        </div>
      </div>
    </form>
  );
}
