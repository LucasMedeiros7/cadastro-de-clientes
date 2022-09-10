import { User, IdentificationCard, Phone, House, Info } from 'phosphor-react';
import { useState } from 'react';
import styles from './Card.module.css';

export function Card({ client, index }) {
  const [page, setPage] = useState('allClients');

  if (page === 'allClients') {
    return (
      <div className={styles.card} onClick={() => setPage('clientInfo')}>
        <h1>
          {client.name} {client.lastname}
        </h1>
        <span>#{index + 1}</span>
      </div>
    );
  }

  if (page === 'clientInfo') {
    return (
      <div className={styles.allInformations}>
        <div>
          <strong>
            <User size={32} /> {client.name} {client.lastname}
          </strong>
          <p>
            <IdentificationCard size={32} /> {client.email}
          </p>
          <p>
            <Phone size={32} /> ({client.ddd}) {client.phone}
          </p>
        </div>

        <div className={styles.address}>
          <strong>
            <House size={32} /> Endereço:
          </strong>
          <ul>
            <li>
              <span>CEP:</span> {client.CEP}
            </li>
            <li>
              <span>Cidade:</span> {client.city} - {client.UF}
            </li>
            <li>
              <span>Bairro:</span> {client.district}
            </li>
            <li>
              <span>Rua:</span> {client.street}
            </li>
          </ul>
        </div>

        <div className={styles.personalInfo}>
          <strong>
            <Info size={32} /> Outras informações:
          </strong>
          <ul>
            <li>
              <span>CPF:</span> {client.CPF}
            </li>
            <li>
              <span>Data de nascimento:</span> {client.birthDate}
            </li>
            <li>
              <span>Renda mensal:</span> R$ {client.income}
            </li>
          </ul>
        </div>
        <button onClick={() => setPage('allClients')}>voltar</button>
      </div>
    );
  }
}
