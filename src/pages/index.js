import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/navbar";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import Works from "@/components/Works/works";
import Features from "@/components/Features/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Jumbotron />
        <Works />
        <Features />
      </main>
    </>
  );
}
