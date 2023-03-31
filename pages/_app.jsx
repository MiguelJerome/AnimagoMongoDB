import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
