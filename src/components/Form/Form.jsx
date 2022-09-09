import { useContext, useState } from 'react';
import { clientContext } from '../../context/clientContext';

import { SignUp } from './SignUp';
import { Address } from './Address';
import { PersonalInfo } from './PersonalInfo';

import styles from './styles/Form.module.css';

export function Form() {
  const { saveOnLocalStorage } = useContext(clientContext);
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
    birthDate: '',
    income: '',
  });

  const checkAndAlert = (...values) => values.some(value => value === '');

  function checkIfInputIsFilled() {
    if (page === 0) {
      const { name, lastname, email, ddd, phone } = formData;
      return checkAndAlert(name, lastname, email, ddd, phone);
    }

    if (page === 1) {
      const { CEP, city, UF, district, street } = formData;
      return checkAndAlert(CEP, city, UF, district, street);
    }

    if (page === 2) {
      const { CPF, bithDate, income } = formData;
      return checkAndAlert(CPF, bithDate, income);
    }
  }

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

  function handleSaveClientInfo() {
    saveOnLocalStorage(formData);
    alert('Cliente salvo cria');
    window.location.reload();
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

  function NextButton() {
    if (page < 2) {
      return (
        <button
          title={
            checkIfInputIsFilled()
              ? 'Preencha todos os campos'
              : 'Próxima página'
          }
          disabled={checkIfInputIsFilled()}
          onClick={handlePageChange}
        >
          Próximo
        </button>
      );
    } else {
      return (
        <button
          title={
            checkIfInputIsFilled()
              ? 'Preencha todos os campos'
              : 'Salvar informações do cliente'
          }
          disabled={checkIfInputIsFilled()}
          onClick={handleSaveClientInfo}
        >
          Salvar
        </button>
      );
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.fields}>{PageDisplay()}</div>

      <div className={styles.buttons}>
        <button disabled={page === 0} onClick={handlePageChange}>
          Voltar
        </button>

        {NextButton()}
      </div>
    </div>
  );
}
