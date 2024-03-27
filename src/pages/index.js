import Head from "next/head";
import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
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

export default function Home() {
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize("G-EWX660V90D");
  }, []);

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
