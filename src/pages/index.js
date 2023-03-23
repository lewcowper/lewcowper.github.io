import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Head>
        <title>lewcowper - About</title>
        <meta name="description" content="Personal website of Lewis Cowper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </>
  );
};

export default Home;
