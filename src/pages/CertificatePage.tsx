import React from 'react';
import { useNavigate } from 'react-router-dom';
import CertificateForm from '../components/CertificateForm';

export default function CertificatePage() {
  const navigate = useNavigate();

  const handleFormSubmit = (submittedName: string) => {
    navigate('/generate', { state: { name: submittedName } });
  };

  return (
    <div className=''>
      <CertificateForm onSubmit={handleFormSubmit} />
    </div>
  );
}
