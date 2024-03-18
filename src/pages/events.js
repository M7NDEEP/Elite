import React from 'react'
import Head from "next/head";
import styles from "@/styles/Events.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const events = () => {
  const upcomingevent = { name: "wittyhacks", location: "Indore, India", description: 'Wittyhacks prides itself on being Central India’s biggest community hackathon. Since its inception in 2018, Wittyhacks has been a platform where technology leaders and the brightest minds come together to collaborate on building tools that solve real problems.', date: '5 April 2024', link: '', image: 'https://wittyhacks4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe9e2409ea9734a56bedc7dc688c8ff3c%2Fassets%2Fcover%2F918.jpeg&w=1440&q=100'};

  // const pastevents = [{
  // }];

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.page1}>
          <div className={styles.box1}></div>
          <h1>Upcoming <span style={{ WebkitTextStroke: '2px white', color: 'transparent', letterSpacing: '1px' }}>Events</span></h1>
        </div>

        <div className={styles.page2}></div>

      </main>

    </>
  )
}

export default events