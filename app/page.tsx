import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
          />
          About Us
        </a>
        <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
          />
          Contact Us
        </a>
        <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          Design
        </a>
        <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          Checkout
        </a>
      </header>
      <main className={styles.main}>
        <div>
          Our Commitment To Quality Is Always Etched In Stone
        </div>
        <div>
          We specialize in custom designs
        </div>
        <Image
          className={styles.logo}
          src="/burns_logo_banner.JPEG"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
 
        {/*<div className={styles.ctas}>*/}
        {/*  <a*/}
        {/*    className={styles.primary}*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className={styles.logo}*/}
        {/*      src="/vercel.svg"*/}
        {/*      alt="Vercel logomark"*/}
        {/*      width={20}*/}
        {/*      height={20}*/}
        {/*    />*/}
        {/*    Deploy now*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    className={styles.secondary}*/}
        {/*  >*/}
        {/*    Read our docs*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>
      {/* TODO: footer and header should share as much as possible and be represented differently*/}
      <footer className={styles.footer}>
        <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
          />
          About Us
        </a>
        <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
          />
          Contact Us
        </a>
        <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          Design
        </a>
        <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          Checkout
        </a>
      </footer>
    </div>
  );
}
