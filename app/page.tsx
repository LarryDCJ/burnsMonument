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
        <div className={styles.missionStatement}>
          Our Commitment To Quality Is Always Etched In Stone
        </div>

        <div className={styles.customStatement}>
          We specialize in custom designs
        </div>

        <Image
          className={styles.logo}
          src="/burns_logo_banner.JPEG"
          alt="Burns Monument Co. Logo Banner"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} // optional
        />
        <div className={styles.address}>
          1605 South Blake Street Pine Bluff, AR 71603
        </div>

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
