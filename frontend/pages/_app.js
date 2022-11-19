import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-[100vh] ">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
