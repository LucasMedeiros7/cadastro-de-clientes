import styles from './styles/InputStyles.module.css';

export function Address({ formData, setFormData }) {
  return (
    <form className={styles.formSingUp}>
      <div className={styles.rightSideInput}>
        <div className={styles.inputCEP}>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            value={formData.CEP}
            onChange={e => setFormData({ ...formData, CEP: e.target.value })}
          />
        </div>
        <div className={styles.inputDistrict}>
          <label htmlFor="district">Bairro:</label>
          <input
            type="text"
            id="district"
            readOnly
            value={formData.district}
            onChange={e =>
              setFormData({ ...formData, district: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.leftSideInput}>
        <div className={styles.inputCity}>
          <div>
            <label htmlFor="city">Cidade:</label>
            <input
              type="text"
              id="city"
              readOnly
              value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="uf">UF:</label>
            <input
              type="text"
              id="uf"
              readOnly
              value={formData.UF}
              onChange={e => setFormData({ ...formData, UF: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.inputStreet}>
          <label htmlFor="street">Rua:</label>
          <input
            type="text"
            id="street"
            readOnly
            value={formData.street}
            onChange={e => setFormData({ ...formData, street: e.target.value })}
          />
        </div>
      </div>
    </form>
  );
}
