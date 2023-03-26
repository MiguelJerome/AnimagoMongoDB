import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ImagePrincipal from '../public/img/image_accueil.png';
import facebook from '../public/img/facebook.svg';
import instagram from '../public/img/instagram.svg';
import youtube from '../public/img/youtube.svg';
import search from '../public/img/search.png';
import Login from '../public/img/login.png';
import Cart from '../public/img/cart.png';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/Accueil');
    }
  }, [router]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
