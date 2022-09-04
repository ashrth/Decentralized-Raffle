import Head from "next/head"
import styles from "../styles/Home.module.css"

import Header from "../components/Header"
import { useMoralis } from "react-moralis"
import RaffleEntrance from "../components/RaffleEntrance"

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        
        <div className={styles.container}>
            <Head>
                <title> Raffle</title>
                <meta name="description" content="Decentralized Raffle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*<ManualHeader />*/}
            <Header />
            <RaffleEntrance />

        </div>
    )
}

