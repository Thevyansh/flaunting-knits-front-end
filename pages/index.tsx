import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flaunting Knits</title>
        <meta name="description" content="Clothing - Crafted with sheer love & passion by Anshul and Hemal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.uc}>

        <Image src='/logo.svg' alt='next' width="400px" height="400px"/>
        <h1>Our online store will be up and running soon, Stay Tuned!</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.thevyansh.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Being Made with ❤️ by Thevyansh Acharya

        </a>
      </footer>
    </div>
  )
}

export default Home
