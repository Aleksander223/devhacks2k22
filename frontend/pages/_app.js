import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <div className="px-12 py-8 min-h-[100vh] ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
