import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { hookstate, useHookstate } from '@hookstate/core';
import { localstored } from '@hookstate/localstored';

export const themeState = hookstate('light');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
