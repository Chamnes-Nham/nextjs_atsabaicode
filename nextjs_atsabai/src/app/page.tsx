// pages/index.tsx
import Head from 'next/head';
import Posts from './components/Posts';


const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <main>
        <h1>Welcome to Next.js!</h1>
        <Posts />
      </main>
    </div>
  );
};

export default Home;
