import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import MyForm from "../components/MyForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Forumular zur Datenerhebung</title>
        <meta name="description" content="Formular zur Datenerhebung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* <ContactUs /> */}
        {/* and api/sendgrid was the github template */}

        {/* my solution via MyForm */}
        {/* <MyForm /> */}
        <p>This page is still under construction, not in use</p>
      </main>
    </div>
  );
}
