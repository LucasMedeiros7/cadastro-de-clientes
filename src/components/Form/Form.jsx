import { useState } from 'react';

import { SignUp } from './SignUp';
import { Address } from './Address';
import { PersonalInfo } from './PersonalInfo';

import styles from './styles/Form.module.css';

export function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    ddd: '',
    phone: '',
    CEP: '',
    city: '',
    UF: '',
    district: '',
    street: '',
    CPF: '',
    bithDate: '',
    income: '',
  });

  function handlePageChange(event) {
    if (event.target.textContent === 'Próximo') {
      setPage(currPage => currPage + 1);
      return;
    }

    if (event.target.textContent === 'Voltar') {
      setPage(currPage => currPage - 1);
      return;
    }
  }

  function PageDisplay() {
    switch (page) {
      case 0:
        return <SignUp formData={formData} setFormData={setFormData} />;
      case 1:
        return <Address formData={formData} setFormData={setFormData} />;
      case 2:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
    }
  }

  const isLastPage = page === 2 ? 'Salvar' : 'Próximo';

  return (
    <div className={styles.form}>
      <div className={styles.fields}>{PageDisplay()}</div>

      <div className={styles.buttons}>
        <button disabled={page === 0} onClick={handlePageChange}>
          Voltar
        </button>
        <button onClick={handlePageChange}>{isLastPage}</button>
      </div>
    </div>
  );
}
