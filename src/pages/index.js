import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { GiMoebiusTriangle } from "react-icons/gi";
import { CgMouse } from "react-icons/cg";

export default function Home() {

  return (
    <>
      <Head>
        <title>Elite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.box1}>
        <img src="https://arino-html.vercel.app/assets/img/hero_bg.jpeg" alt="" />
      </div>

      <Navbar />
      <main className={styles.main}>

        <div className={styles.page1}>
          <h2>
            Innovation <br />is <span>Intrinsic</span>
          </h2>
          <div className={styles.follow}>Follow Us - <span className={styles.insta}><Link href='#'>Instagram</Link></span> | <span className={styles.ghub}><Link href='#'>Github</Link></span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.2rem', letterSpacing: '0.5px' }}>Get a Quote <span>&#8594;</span></p>
            <p style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>We deliver best problem-solving solutions for our clients and provide the finest finishing <br />products in the present and upcoming future.</p>
          </div>
          <CgMouse className={styles.mousebtn} size={32} />

          <div className={styles.tri1}><img src="/tri.png" /></div>
          <div className={styles.tri2}><img src="/tri.png" /></div>
          <div className={styles.tri3}><img src="/tri.png" /></div>
        </div>

        <div className={styles.page2}>

          <div className={styles.box2}>
            <div style={{ width: '50%' }}><h2>Did You Know ?</h2>
              <p style={{ width: '70%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero, minima accusamus vel voluptatum, quod cum nam impedit eos, doloribus nihil repellendus consectetur.</p></div>
            <div style={{ marginTop: '5rem' }}>
              <h3><span className={styles.eight}>8</span><span style={{ fontSize: '5rem', fontWeight: '500', color: 'transparent',WebkitTextStroke:'1px white' }}>+</span> <br /><span style={{ lineHeight: '1rem' }}>Projects Delivered</span></h3>
            </div>
            <div className={styles.gola}></div>
          </div>

          <div className={styles.services}>
            <div style={{ width: '30%' }} className={styles.services_help}>
              <h1>What We Can Do </h1>
              <h2>Services we can help you with</h2>
              <p>Our Services <span >&#8594;</span></p>
            </div>

            <div style={{}} className={styles.services_img}>
              <div className={styles.services_img1}><h1>App <br /> Development</h1></div>
              <div className={styles.services_img2}><h1>Web <br /> Development</h1></div>
              <div className={styles.services_img3}><h1>Ui/Ux Design</h1></div>
              <div className={styles.services_img4}><h1>Technology</h1></div>
            </div>

          </div>
        </div>

        <div className={styles.page3}>
        <div className={styles.fixedimg}></div>
        <h2>Our Projects</h2>
        

        <div className={styles.elem_container}>
        <div className={styles.elem}>
        <div className={styles.overlay}></div>
          <h1>PROJECT ONE</h1>
        </div>
        <div className={styles.elem}>
        <div className={styles.overlay}></div>
          <h1>PROJECT TWO</h1>
        </div>
        <div className={styles.elem}>
        <div className={styles.overlay}></div>
          <h1>PROJECT THREE</h1>
        </div>
        <div className={styles.elem}>
        <div className={styles.overlay}></div>
          <h1>PROJECT FOUR</h1>
        </div>
        </div>
        

        </div>

      </main>
    </>
  );
}
