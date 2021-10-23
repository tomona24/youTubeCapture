import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from '../components/atoms/Button';

const Home: NextPage = () => {
  return (
    <main>
      <div className='h-[100vh] flex flex-col justify-center align-middle text-center'>
        Hello World!
        <Button>あいうえお</Button>
      </div>
    </main>
  );
};

export default Home;
