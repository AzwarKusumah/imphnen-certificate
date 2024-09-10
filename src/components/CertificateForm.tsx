import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CertificateFormProps {
  onSubmit: (name: string) => void;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Sertifikat Kemalasan   </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Nama sipemalas</Label>
                <Input
                  id='name'
                  placeholder='Masukin nama ente'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type='submit' className='w-full bg-blue-300 mt-8'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateForm;
