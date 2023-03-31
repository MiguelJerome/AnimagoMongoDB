import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectToAccueil = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/Accueil');
    }
  }, [router]);

  return null;
};

export default RedirectToAccueil;
