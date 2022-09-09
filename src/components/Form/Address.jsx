import styles from './styles/InputStyles.module.css';

export function Address({ formData, setFormData }) {
  async function getCEP(event) {
    try {
      const res = await fetch(
        `https://viacep.com.br/ws/${event.target.value}/json/`
      );
      const {
        bairro: district,
        logradouro: street,
        localidade: city,
        uf: UF,
      } = await res.json();

      setFormData({ ...formData, district, street, city, UF });
    } catch {
      alert('CEP inválido');
    }
  }

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
            onBlur={getCEP}
          />
        </div>
        <div className={styles.inputDistrict}>
          <label htmlFor="district">Bairro:</label>
          <input type="text" id="district" readOnly value={formData.district} />
        </div>
      </div>

      <div className={styles.leftSideInput}>
        <div className={styles.inputCity}>
          <div>
            <label htmlFor="city">Cidade:</label>
            <input type="text" id="city" readOnly value={formData.city} />
          </div>

          <div>
            <label htmlFor="uf">UF:</label>
            <input type="text" id="uf" readOnly value={formData.UF} />
          </div>
        </div>

        <div className={styles.inputStreet}>
          <label htmlFor="street">Rua:</label>
          <input type="text" id="street" readOnly value={formData.street} />
        </div>
      </div>
    </form>
  );
}
