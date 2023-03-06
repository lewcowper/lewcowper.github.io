import Navbar from '../components/Navbar';
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>lewcowper</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
    </div>
  )
}

export default Home;
