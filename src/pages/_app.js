import "@/styles/globals.css";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";
import gsap from 'gsap';
import Cursor from "./Cursor";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
  }, []);

  return <>
    <Cursor />
    <Component {...pageProps} />
    <Footer />
  </>;
}
