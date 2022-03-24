import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Rentals from "./Rentals";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Rentals />
    </div>
  );
}
