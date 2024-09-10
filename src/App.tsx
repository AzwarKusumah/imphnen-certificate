import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import CertificatePage from '@/pages/CertificatePage';
import CertificateGenerate from '@/components/CertificateGenerate';
import CertificatePreview from '@/pages/CertificatePreview';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='flex items-end justify-end p-5'>
        <ModeToggle />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<CertificatePage />} />
          <Route path='/generate' element={<CertificateGenerate />} />
          <Route path='/preview' element={<CertificatePreview />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
