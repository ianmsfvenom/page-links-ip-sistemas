import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ListButtons from "@/components/ListButtons";

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Sistemas - Links</title>
        <meta name="description" content="Página de links da IP Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <div className={styles.circleIcon}>
            <img src="/images/logo.png" width="100%" />
          </div>
          <div className={styles.titleLogo}>
            <img src="/images/logo-media.png" width="100%" />
          </div>
          <ListButtons />
        </div>
      </main>
    </>
  );
}
