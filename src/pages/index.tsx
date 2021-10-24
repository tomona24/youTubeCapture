import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "src/components/organisms/Main";


const Home: NextPage = () => {
  return (
    <main>
        動画日記ジェネレーター
        <Main />

        
    </main>
  );
};

export default Home;
