import Navbar from '../components/Navbar';
import ProjectsContent from '../components/ProjectsContent'
import Head from "next/head";

const projects = () => {
  const pageTitle = 'Projects';

  return (
    <div>
      <Head>
        <title>{pageTitle} - lewcowper</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar pageTitle={pageTitle}/>
      <ProjectsContent />
    </div>
  )
}

export default projects;
