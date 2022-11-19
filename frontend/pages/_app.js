import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
