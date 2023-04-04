import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

const projects = () => {
  return (
    <>
      <Head>
        <title>lewcowper - Projects</title>
        <meta name="description" content="Personal website of Lewis Cowper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={1}/>
      <Projects />
    </>
  );
}

export default projects;