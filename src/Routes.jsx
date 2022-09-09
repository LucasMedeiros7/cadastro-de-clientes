import { Route, Routes } from 'react-router-dom';
import { Clients } from './pages/Clients';
import { Register } from './pages/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
}
