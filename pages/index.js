import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trackstats - Search Audio Features</title>
      </Head>
        <Main />
    </div>
  )
}
