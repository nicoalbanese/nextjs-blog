import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SpotifySection from "../components/SpotifySection";

import Link from "next/link";
import Date from "../components/Date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const spotifyRes = await fetch("https://gooky.io/api/spotifyData");
  // console.log(spotifyRes)
  const spotifyData = await spotifyRes.json();

  // const spotifyData = { isPlaying: false };

  return {
    props: {
      allPostsData,
      spotifyData,
      // data,
      // cpData
    },
  };
}

export default function Home({ allPostsData, spotifyData }) {
  // console.log(spotifyData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm an investor at{" "}
          <a href='https://www.ascensionventures.com'>Ascension</a> where I
          focus on pre-Seed investments. I also help run the{" "}
          <a href='https://www.debutsessions.co.uk'>Debut Sessions</a>, a
          virtual pitch initiative aiming to democratise fundraising for
          pre-Seed startups.
        </p>
        <p>
          Aside from work, I'm an avid football fan (COYG) and love building
          things. I also love and used to make music and always love to talk
          music-tech.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {spotifyData && <SpotifySection cpData={spotifyData} />}
    </Layout>
  );
}
