import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import certificateBackground from '../assets/sertimvikat.png';

const getFormattedDate = (): string => {
  const now = new Date();

  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  return `${day} ${month} ${year}`;
};

export default function CertificatePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);

  const name = location.state?.name || 'Unknown User';

  const handleDownloadPDF = async () => {
    if (certificateRef.current === null) return;

    try {
      const imgData = await toPng(certificateRef.current, {
        quality: 1,
        pixelRatio: 3,
      });
      const pdf = new jsPDF('landscape', 'px', [1190, 842]);
      pdf.addImage(imgData, 'PNG', 0, 0, 1190, 842);
      pdf.save('certificate.pdf');
    } catch (error) {
      console.error('Could not generate certificate image', error);
    }
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        ref={certificateRef}
        className='relative bg-white w-full max-w-[595px] h-auto aspect-[595/421] text-center'
        style={{
          backgroundImage: `url(${certificateBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-12 md:p-12 lg:p-12 text-[#24a5f4]'>
          <h3 className='text-sm sm:text-md md:text-xl lg:text-2xl font-bold mb-12 sm:mb-16 md:mb-16 lg:mb-16'>
            {name || 'Nama Pemalas'}
          </h3>
        </div>
        <div className='absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-12 md:p-12 lg:p-12  text-[#24a5f4]'>
          <p className='text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] font-bold mt-24 sm:mt-36 md:mt-36 lg:mt-36'>
            {getFormattedDate()}
          </p>
        </div>
      </div>
      <div className='flex justify-between'>
        <Button
          onClick={handleBack}
          className='bg-[#f34c4c] px-4 py-2 mt-4 rounded mx-2'
        >
          Generate Ulang
        </Button>
        <Button
          onClick={handleDownloadPDF}
          className='bg-[#24a5f4] px-4 py-2 mt-4 rounded mx-2'
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
}
