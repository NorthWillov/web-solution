import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/navbar";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import Works from "@/components/Works/works";
import Features from "@/components/Features/features";
import Roadmap from "@/components/Roadmap/roadmap";
import Team from "@/components/Team/team";
import Join from "@/components/Join/join";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";
import SubscribeModal from "@/components/SubscribeModal/subscribemodal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false);

  const openSubscribeModal = () => {
    setSubscribeModalOpen(true);
  };

  const closeSubscribeModal = () => {
    setSubscribeModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Web Solution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Jumbotron onSubscribeClick={openSubscribeModal} />
        <Works onSubscribeClick={openSubscribeModal} />
        <Features />
        <Roadmap />
        <Team />
        <Join onSubscribeClick={openSubscribeModal} />
        <Contact />
        <Footer />
        <SubscribeModal
          isOpen={isSubscribeModalOpen}
          onClose={closeSubscribeModal}
        />
      </main>
    </>
  );
}
