import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent'
import Head from "next/head";

const Home = () => {
  const pageTitle = 'About';

  return (
    <div>
      <Head>
        <title>{pageTitle} - lewcowper</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar pageTitle={pageTitle}/>
      <AboutContent />
    </div>
  )
}

export default Home;
