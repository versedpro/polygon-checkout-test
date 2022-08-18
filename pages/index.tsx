import { LunaCheckoutWidget } from "luna-nft-checkout";
import "luna-nft-checkout/lib/esm/styles/IFrameBox.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LunaCheckoutWidget
        collectionId="c4e94795-a8e0-4d4e-af55-5079edfcd1d8"
        username=""
        password=""
        libraryType="ethers"
      />
    </div>
  );
};

export default Home;
