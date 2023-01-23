import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    document.cookie = `count=${count + 1}`;
  }

  useEffect(() => {
    const cookie = document.cookie.split(';').find((cookie) => cookie.startsWith('count='));
    if (cookie) {
      // @ts-ignore
      const count = parseInt(cookie.split('=')[1]);
      setCount(count);
    }
  })

  return (
    <>
      <Head>
        <title>simple react clicker</title>
        <meta name="description" content="simple react clicker, generated with t3 app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>simple react clicker</h1>
        <div className="app">
          <span>{count}</span>
          <button onClick={handleClick}>Click</button>
        </div>
      </main>
    </>
  );
};

export default Home;
