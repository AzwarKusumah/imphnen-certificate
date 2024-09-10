import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

export default function CertificateGenerate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const name = location.state?.name || 'Unknown User';

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate(`/preview`, { state: { name } });
          }, 3000);
        }
        return newProgress;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [name, navigate]);

  return (
    <div className='flex flex-col items-center h-screen'>
      <h2 className='text-xl mb-4'>Memuat sertifikat kemalasan {name}...</h2>
      <Progress value={progress} className='w-full max-w-md' />
    </div>
  );
}
