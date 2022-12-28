import '../styles/globals.css'
import '../styles/styles.module.css'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>  
    </div>
  );
}

export default MyApp
