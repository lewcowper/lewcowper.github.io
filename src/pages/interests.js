import Navbar from '../components/Navbar';
import InterestsContent from '../components/InterestsContent'
import Head from "next/head";

const interests = () => {
  const pageTitle = 'Interests';

  return (
    <div>
      <Head>
        <title>{pageTitle} - lewcowper</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar pageTitle={pageTitle}/>
      <InterestsContent />
    </div>
  )
}

export default interests;
