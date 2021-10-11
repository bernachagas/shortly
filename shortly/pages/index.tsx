import type { NextPage } from 'next';
import Head from "next/head";

import {Header, Footer, CallToAction, Hero} from '../components'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Shortly - Shorten your URLs</title>
                <meta name="description" content="Shortly, a URL shortener"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div id="home">
                <Header />
                <Hero />
                <CallToAction />
                <Footer />
            </div>
        </>
    )
}

export default Home;
